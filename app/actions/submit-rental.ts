"use server";

import { brand } from "../lib/brand";

export type RentalFormState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
};

const UNIT_TYPES = [
  "roulotte-chantier",
  "bureau-modulaire",
  "unite-sur-mesure",
  "pas-sur",
] as const;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitRental(
  _prev: RentalFormState,
  formData: FormData,
): Promise<RentalFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const unitType = String(formData.get("unitType") ?? "").trim();
  const startDate = String(formData.get("startDate") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: Record<string, string> = {};

  if (!name) errors.name = "Nom requis.";
  if (!email) errors.email = "Courriel requis.";
  else if (!isValidEmail(email)) errors.email = "Courriel invalide.";
  if (!phone) errors.phone = "Téléphone requis.";
  if (!unitType || !UNIT_TYPES.includes(unitType as (typeof UNIT_TYPES)[number])) {
    errors.unitType = "Choisissez un type d'unité.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Veuillez corriger les champs indiqués.", errors };
  }

  // Prêt pour branchement courriel / CRM — log en dev
  console.info(`[${brand.name} — demande location]`, {
    name,
    company,
    email,
    phone,
    unitType,
    startDate,
    message,
    at: new Date().toISOString(),
  });

  return {
    ok: true,
    message:
      "Merci! Votre demande a été reçue. Notre équipe vous contactera sous 24 h ouvrables.",
  };
}
