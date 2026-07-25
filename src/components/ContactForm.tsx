"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

interface ContactFormProps {
  variant?: "contact" | "devis";
}

const inputClass = "input-dark";

export default function ContactForm({ variant = "contact" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <CheckCircle2 className="h-14 w-14 text-brand-500 mx-auto mb-4" />
        <h3 className="font-sans text-2xl text-white mb-2">Message envoyé</h3>
        <p className="text-navy-400 text-sm">Nous vous recontacterons sous 24h ouvrées.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-navy-400 mb-2">
            Nom complet *
          </label>
          <input type="text" id="name" name="name" required className={inputClass} placeholder="Jean Dupont" />
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-navy-400 mb-2">
            Entreprise
          </label>
          <input type="text" id="company" name="company" className={inputClass} placeholder="Votre entreprise" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-navy-400 mb-2">
            Email *
          </label>
          <input type="email" id="email" name="email" required className={inputClass} placeholder="contact@entreprise.fr" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-navy-400 mb-2">
            Téléphone *
          </label>
          <input type="tel" id="phone" name="phone" required className={inputClass} placeholder="06 12 34 56 78" />
        </div>
      </div>

      {variant === "devis" && (
        <>
          <div>
            <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-navy-400 mb-2">
              Service *
            </label>
            <select id="service" name="service" required className={`${inputClass} cursor-pointer`}>
              <option value="">Sélectionnez un service</option>
              <option value="sprinkler">Installation Sprinkler (SPK)</option>
              <option value="ria">Installation RIA</option>
              <option value="conformite">Mise en conformité</option>
              <option value="maintenance">Maintenance / SAV</option>
              <option value="etude">Étude & Conception</option>
              <option value="depannage">Dépannage urgent</option>
            </select>
          </div>
          <div>
            <label htmlFor="surface" className="block text-xs font-bold uppercase tracking-wider text-navy-400 mb-2">
              Surface (m²)
            </label>
            <input type="number" id="surface" name="surface" className={inputClass} placeholder="Ex: 5000" />
          </div>
        </>
      )}

      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy-400 mb-2">
          {variant === "devis" ? "Description du projet *" : "Message *"}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder={variant === "devis" ? "Type de bâtiment, contraintes, délais..." : "Votre message..."}
        />
      </div>

      <button type="submit" disabled={loading} className="btn-flame w-full sm:w-auto disabled:opacity-60">
        <Send className="h-4 w-4" />
        {loading ? "Envoi..." : variant === "devis" ? "Envoyer ma demande" : "Envoyer"}
      </button>
    </form>
  );
}
