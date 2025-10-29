import { Check } from "lucide-react";

const ResearchAreas = () => {
  const areas = [
    "Process Systems Engineering",
    "Nanomaterials & Catalysis",
    "Renewable Energy & Biofuels",
    "Polymer Science & Engineering",
    "Green Chemistry & Sustainability",
    "Environmental Engineering",
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Key Research Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-foreground font-medium">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
