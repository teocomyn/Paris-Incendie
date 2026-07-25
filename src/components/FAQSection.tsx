"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { faq } from "@/lib/data";
import { images } from "@/lib/images";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="section-label">FAQ</p>
            <h2 className="section-title mb-2">Questions fréquentes</h2>
            <div className="divider-red my-5" />
            <p className="text-navy-600 mb-8 leading-relaxed">
              Sprinkler, RIA, maintenance, devis — les réponses aux questions
              que nos clients nous posent le plus souvent.
            </p>
            <div className="relative aspect-[4/3] photo-frame">
              <Image
                src={images.fireEquipment}
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
                  className={`border rounded-sm transition-colors ${
                    open ? "border-brand-200 bg-brand-50/30" : "border-navy-200 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    onClick={() => setOpenIndex(open ? null : index)}
                    aria-expanded={open}
                  >
                    <span className="font-semibold text-navy-900 text-sm">{item.question}</span>
                    {open ? (
                      <Minus className="h-4 w-4 text-brand-600 shrink-0" />
                    ) : (
                      <Plus className="h-4 w-4 text-navy-400 shrink-0" />
                    )}
                  </button>
                  {open && (
                    <div className="px-5 pb-5 text-sm text-navy-600 leading-relaxed">
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
