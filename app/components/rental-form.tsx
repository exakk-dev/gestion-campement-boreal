"use client";

import { useActionState } from "react";
import { submitRental, type RentalFormState } from "../actions/submit-rental";

const initial: RentalFormState = { ok: false, message: "" };

const inputClass =
  "field-focus w-full border border-boreal-silver-mid/60 bg-white px-4 py-3 text-boreal-ink outline-none focus:border-boreal-ink";

const labelClass = "mb-1.5 block text-sm font-medium text-boreal-ink/80";

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} className="mt-1 text-sm text-red-800" role="alert">
      {error}
    </p>
  );
}

export function RentalForm() {
  const [state, action, pending] = useActionState(submitRental, initial);

  if (state.ok) {
    return (
      <div
        className="success-enter border border-boreal-forest/30 bg-boreal-silver/50 px-8 py-12"
        role="status"
      >
        <p className="font-display text-2xl text-boreal-ink">Demande envoyée</p>
        <p className="mt-4 max-w-md leading-relaxed text-boreal-ink/75">
          {state.message}
        </p>
        <a
          href="/"
          className="mt-8 inline-block text-sm font-medium text-boreal-forest-deep underline-offset-4 hover:underline"
        >
          Retour à l&apos;accueil
        </a>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-8" noValidate>
      {state.message && !state.ok && (
        <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900" role="alert">
          {state.message}
        </p>
      )}

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nom complet *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClass}
            aria-invalid={!!state.errors?.name}
            aria-describedby={state.errors?.name ? "name-error" : undefined}
          />
          <FieldError id="name-error" error={state.errors?.name} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Entreprise
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Courriel *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputClass}
            aria-invalid={!!state.errors?.email}
            aria-describedby={state.errors?.email ? "email-error" : undefined}
          />
          <FieldError id="email-error" error={state.errors?.email} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Téléphone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={inputClass}
            aria-invalid={!!state.errors?.phone}
            aria-describedby={state.errors?.phone ? "phone-error" : undefined}
          />
          <FieldError id="phone-error" error={state.errors?.phone} />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="unitType" className={labelClass}>
            Type d&apos;unité *
          </label>
          <select
            id="unitType"
            name="unitType"
            required
            defaultValue=""
            className={`${inputClass} appearance-none`}
            aria-invalid={!!state.errors?.unitType}
            aria-describedby={state.errors?.unitType ? "unit-error" : undefined}
          >
            <option value="" disabled>
              Sélectionner…
            </option>
            <option value="roulotte-chantier">Roulotte de chantier</option>
            <option value="bureau-modulaire">Bureau modulaire</option>
            <option value="unite-sur-mesure">Unité sur mesure</option>
            <option value="pas-sur">Je ne suis pas encore certain</option>
          </select>
          <FieldError id="unit-error" error={state.errors?.unitType} />
        </div>
        <div>
          <label htmlFor="startDate" className={labelClass}>
            Date souhaitée de début
          </label>
          <input id="startDate" name="startDate" type="date" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Détails du projet
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Site, durée, aménagement, accès…"
          className={`${inputClass} resize-y min-h-[120px]`}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="btn-lift inline-flex h-14 w-full items-center justify-center bg-boreal-ink px-8 text-base font-medium text-boreal-mist hover:bg-boreal-ink-soft disabled:opacity-60 md:w-auto md:min-w-[240px]"
      >
        {pending ? "Envoi en cours…" : "Envoyer ma demande de location"}
      </button>
    </form>
  );
}
