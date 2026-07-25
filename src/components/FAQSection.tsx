"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { faq } from "@/lib/data";
import { realPhotos } from "@/lib/images";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding section-dark">
      <div className="grain-overlay" />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="section-label">FAQ</p>
            <h2 className="section-title mb-2">Questions fréquentes</h2>
            <div className="divider-red my-5" />
            <p className="text-navy-300 mb-8 leading-relaxed">
              Sprinkler, RIA, maintenance, devis — les réponses aux questions
              que nos clients nous posent le plus souvent.
            </p>
            <div className="relative aspect-[4/3] photo-frame border-brand-500/20">
              <Image
                src={realPhotos.sprinklerHead}
                alt="Équipements sécurité incendie"
                fill
                className="object-cover"
                sizes="500px"
              />
            </div>
          </div>

          <div className="space-y-2">
            {faq.map((item, index) => {
              const open = openIndex === index;
              return (
                <div
                  key={item.question}
                  className={open ? "glass-accordion-open" : "glass-accordion"}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                  >
                    <span className="font-semibold text-white text-sm">{item.question}</span>
                    {open ? (
                      <Minus className="h-4 w-4 text-brand-500 shrink-0" />
                    ) : (
                      <Plus className="h-4 w-4 text-navy-500 shrink-0" />
                    )}
                  </button>
                  {open && (
                    <div className="px-5 pb-5 text-sm text-navy-300 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
