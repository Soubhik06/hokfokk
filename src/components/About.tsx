import { Award, Target, Lightbulb, TrendingUp } from "lucide-react";
import { useState } from "react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Academic Excellence",
      description:
        "The Department of Chemical Engineering, Jadavpur University, upholds a legacy of academic excellence, combining a rigorous curriculum with advanced research and hands-on industrial training. Supported by distinguished faculty and modern laboratories, the department nurtures innovation, analytical thinking, and problem-solving skills among students. Jadavpur University, ranked 1st among State Public Universities in India in the NIRF 2025, continues to be a hub of quality education and pioneering research, empowering graduates to lead in academia, industry, and global technological development.",
    },
    {
      icon: Lightbulb,
      title: "Research Focus",
      description:
        "The Department of Chemical Engineering, Jadavpur University, is at the forefront of cutting-edge research addressing real-world industrial and environmental challenges. Our research spans diverse areas including catalysis, reaction engineering, renewable energy, green technologies, process modeling and simulation, nanomaterials, and wastewater treatment. Emphasizing sustainability and innovation, the department actively collaborates with industries, research institutes, and government organizations to develop scalable and impactful technological solutions that contribute to a cleaner and more sustainable future.",
    },
    {
      icon: TrendingUp,
      title: "Industry Partnerships",
      description:
        "Strong collaborations with leading chemical companies and research institutes, enabling internships, joint projects, and technology transfer.",
    },
    {
      icon: Target,
      title: "Student Success",
      description:
        "Graduates excel across academia and industry with robust placement support, research exposure, and entrepreneurship pathways.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 text-gradient-brand">
            About the Department
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            Department of Chemical Engineering, Jadavpur University — Established in 1921, the
            Department of Chemical Engineering at Jadavpur University stands as the first of its kind in Asia.
            Built on the legacy of Acharya P. C. Ray and the vision of pioneering educators, the department
            continues to excel in education, research, and innovation. With a strong focus on industrial relevance
            and sustainable technologies, it nurtures future engineers and researchers to lead advancements in
            chemical and allied industries worldwide.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              The mission of the Department of Chemical Engineering, Jadavpur University, is to foster
              excellence in education, research, and innovation in chemical engineering and allied fields.
              We aim to develop skilled, ethical, and industry-ready engineers who contribute to sustainable
              technological advancement and societal well-being. Through cutting-edge research,
              interdisciplinary collaboration, and a commitment to continuous learning, we strive to address
              global challenges in energy, environment, and materials.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be a global leader in chemical engineering education and research, driving innovation for a
              sustainable and technologically advanced future. The Department of Chemical Engineering,
              Jadavpur University, envisions empowering students and researchers to pioneer solutions that
              transform industries, protect the environment, and contribute meaningfully to society.
            </p>
          </div>
        </div>

        {/* Feature Cards (equal height + expandable) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-stretch">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 dark:bg-neutral-900/70 backdrop-blur border border-border/60 p-6 rounded-xl text-center">
            <div className="text-4xl font-bold mb-2">125</div>
            <div className="text-sm">Faculty Members</div>
          </div>
          <div className="bg-white/80 dark:bg-neutral-900/70 backdrop-blur border border-border/60 p-6 rounded-xl text-center">
            <div className="text-4xl font-bold mb-2">87</div>
            <div className="text-sm">Research Projects</div>
          </div>
          <div className="bg-white/80 dark:bg-neutral-900/70 backdrop-blur border border-border/60 p-6 rounded-xl text-center">
            <div className="text-4xl font-bold mb-2">345</div>
            <div className="text-sm">Publications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

type FeatureCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="h-full flex flex-col bg-white/80 dark:bg-neutral-900/70 backdrop-blur border border-border/60 p-6 rounded-xl text-center shadow-sm">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-bold text-foreground mb-2">{title}</h3>
      <p className={["text-sm text-muted-foreground", expanded ? "" : "line-clamp-6"].join(" ")}>{description}</p>
      <div className="mt-4">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="text-xs font-medium text-primary hover:underline"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      </div>
    </div>
  );
};
