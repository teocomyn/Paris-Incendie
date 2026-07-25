"use client";

import { useState } from "react";
import { Send, CheckCircle2, ArrowRight, ArrowLeft, Droplets, Shield, Wrench } from "lucide-react";

interface ContactFormProps {
  variant?: "contact" | "devis";
}

const inputClass = "input-dark";

const devisServices = [
  { id: "sprinkler", label: "Sprinkler SPK", icon: Droplets },
  { id: "ria", label: "RIA", icon: Shield },
  { id: "conformite", label: "Mise en conformité", icon: Shield },
  { id: "maintenance", label: "Maintenance / SAV", icon: Wrench },
  { id: "etude", label: "Étude & Conception", icon: Shield },
  { id: "depannage", label: "Dépannage urgent", icon: Wrench },
];

export default function ContactForm({ variant = "contact" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16 glass-panel animate-[fadeIn_0.5s_ease]">
        <CheckCircle2 className="h-14 w-14 text-brand-500 mx-auto mb-4" />
        <h3 className="font-sans text-2xl text-white mb-2">Message envoyé</h3>
        <p className="text-navy-300 text-sm">Nous vous recontacterons sous 24h ouvrées.</p>
      </div>
    );
  }

  if (variant === "devis") {
    const totalSteps = 3;
    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                i + 1 <= step ? "bg-brand-500" : "bg-white/10"
              }`}
            />
          ))}
        </div>
        <p className="text-xs text-navy-400 font-semibold uppercase tracking-wider">
          Étape {step} / {totalSteps}
        </p>

        {step === 1 && (
          <div className="space-y-4">
            <p className="text-sm text-navy-300">Quel type de projet ?</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {devisServices.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSelectedService(id)}
                  className={`flex items-center gap-3 p-4 rounded-xl text-left text-sm font-semibold transition-all ${
                    selectedService === id
                      ? "glass-flame text-white"
                      : "glass-subtle text-navy-300 hover:text-white"
                  }`}
                >
                  <Icon className="h-5 w-5 text-brand-500 shrink-0" />
                  {label}
                </button>
              ))}
            </div>
            <input type="hidden" name="service" value={selectedService} required={!!selectedService} />
            <button
              type="button"
              disabled={!selectedService}
              onClick={() => setStep(2)}
              className="btn-flame w-full sm:w-auto disabled:opacity-40"
            >
              Continuer <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <div>
              <label htmlFor="surface" className="block text-xs font-bold uppercase tracking-wider text-navy-400 mb-2">
                Surface du bâtiment (m²)
              </label>
              <input type="number" id="surface" name="surface" className={inputClass} placeholder="Ex: 5000" />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy-400 mb-2">
                Description du projet *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Type de bâtiment, contraintes, délais..."
              />
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="btn-outline">
                <ArrowLeft className="h-4 w-4" /> Retour
              </button>
              <button type="button" onClick={() => setStep(3)} className="btn-flame">
                Continuer <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
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
            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(2)} className="btn-outline">
                <ArrowLeft className="h-4 w-4" /> Retour
              </button>
              <button type="submit" disabled={loading} className="btn-flame disabled:opacity-60">
                <Send className="h-4 w-4" />
                {loading ? "Envoi..." : "Envoyer ma demande"}
              </button>
            </div>
          </div>
        )}
      </form>
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

      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy-400 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Votre message..."
        />
      </div>

      <button type="submit" disabled={loading} className="btn-flame w-full sm:w-auto disabled:opacity-60">
        <Send className="h-4 w-4" />
        {loading ? "Envoi..." : "Envoyer"}
      </button>
    </form>
  );
}
