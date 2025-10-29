import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Who can participate?",
      answer:
        "Any college/university student of any year is eligible for participation.",
    },
    {
      question: "Is there any registration fee?",
      answer:
        "Yes, there is a registration fee of __ per event.",
    },
    {
      question: "How do I submit paper or poster?",
      answer:
        "Via Google Form shared to respective email IDs.",
    },
    {
      question: "Will accommodation be provided?",
      answer:
        "No, accommodation will not be provided. It is the sole responsibility of participants.",
    },
    {
      question: "What should I bring with me?",
      answer:
        "You must bring your college/university ID and any other government photo ID card (AADHAR, PAN, VOTER etc). Any other event specific requirements (if any) would be notified in due course.",
    },
    {
      question: "Will certificates be provided?",
      answer:
        "Yes, certificates would be provided for each event.",
    },
  ];

  return (
    <section id="faqs" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
            ❓ Got Questions?
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about Alchemix 2025
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
