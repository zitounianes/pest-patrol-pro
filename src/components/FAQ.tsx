import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const faqs = [
  { q: "How long does the treatment take?", a: "It depends on the type of pest and the affected area. A standard intervention typically takes between 30 minutes and 2 hours." },
  { q: "Is it safe for children and pets?", a: "Absolutely. We use approved products and certified protocols that are completely safe for your family and pets." },
  { q: "Do you offer a guarantee?", a: "Yes, all our treatments include a guarantee. If the pest reappears, we return at no additional cost." },
  { q: "What areas do you cover?", a: "We cover all of Greater London and surrounding areas including Fulham, Chelsea, Kensington, and beyond." },
  { q: "How much does treatment cost?", a: "The price varies depending on the type of pest and level of infestation. We offer free, no-obligation quotes." },
  { q: "Do you work weekends?", a: "Yes, we are available 24/7, including weekends and bank holidays." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useReveal();

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14 reveal">
          <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Frequently asked questions<span className="text-primary">.</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-2 reveal reveal-delay-1">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-body font-semibold pr-4 text-base">{faq.q}</span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${open === i ? 'bg-primary' : 'bg-muted'}`}>
                  {open === i ? <Minus className="w-3.5 h-3.5 text-primary-foreground" /> : <Plus className="w-3.5 h-3.5 text-muted-foreground" />}
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${open === i ? 'max-h-40' : 'max-h-0'}`}>
                <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
