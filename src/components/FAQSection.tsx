"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { faq } from "@/lib/data";
import { sectionPhotos } from "@/lib/images";
import ScrollReveal from "@/components/ScrollReveal";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding section-elevated">
      <div className="grain-overlay" />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <ScrollReveal>
            <p className="section-label">FAQ</p>
            <h2 className="section-title mb-2">Questions fréquentes</h2>
            <div className="divider-red my-5" />
            <p className="text-navy-300 mb-8 leading-relaxed">
              Sprinkler, RIA, maintenance, devis, les réponses aux questions
              que nos clients nous posent le plus souvent.
            </p>
            <div className="relative aspect-[4/3] photo-frame border-brand-500/20">
              <Image
                src={sectionPhotos.faq}
                alt="Équipements sécurité incendie"
                fill
                className="object-cover"
                sizes="500px"
              />
            </div>
          </ScrollReveal>

          <div className="space-y-2">
            {faq.map((item, index) => {
              const open = openIndex === index;
              return (
                <ScrollReveal key={item.question} delay={index * 50}>
                  <div className={open ? "glass-accordion-open" : "glass-accordion"}>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-4 p-5 text-left"
                      onClick={() => setOpenIndex(open ? null : index)}
                      aria-expanded={open}
                    >
                      <span className="font-semibold text-white text-sm break-words">{item.question}</span>
                      {open ? (
                        <Minus className="h-4 w-4 text-brand-500 shrink-0" />
                      ) : (
                        <Plus className="h-4 w-4 text-navy-500 shrink-0" />
                      )}
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 text-sm text-navy-300 leading-relaxed break-words">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
