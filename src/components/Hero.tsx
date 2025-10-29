import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 px-4 overflow-hidden">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(closest-side, hsl(var(--brand)/0.55), transparent)" }} />
        <div className="absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(closest-side, hsl(var(--primary)/0.55), transparent)" }} />
        <div className="absolute inset-0 bg-grid opacity-[0.08]" />
      </div>

      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
          🧪 Alchemical quest 2025
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          <span className="text-gradient-brand">ALchemix</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
          Igniting Innovation in Chemical Engineering
        </p>

        <div className="flex items-center justify-center gap-6 mb-8 text-sm text-muted-foreground flex-wrap">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>November 14-15, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>HL, RDIT</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join us for two days of groundbreaking research presentations, interactive
          workshops, and networking opportunities with industry leaders and academic
          experts from around the globe.
        </p>

        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Attend Now
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-secondary">
            View Schedule
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-white/80 dark:bg-neutral-900/70 backdrop-blur border border-border/60 p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold mb-2">4 Cr+</div>
            <div className="text-sm">Attendees</div>
          </div>
          <div className="bg-white/80 dark:bg-neutral-900/70 backdrop-blur border border-border/60 p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-sm">Sessions</div>
          </div>
          <div className="bg-white/80 dark:bg-neutral-900/70 backdrop-blur border border-border/60 p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold mb-2">sithkal bangali</div>
            <div className="text-sm">Speakers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
