import { Award, Target, Lightbulb, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Academic Excellence",
      description:
        "Recognized for pioneering contributions to chemical engineering education.",
    },
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide world-class technical education and foster innovation.",
    },
    {
      icon: Lightbulb,
      title: "Industry Partnerships",
      description:
        "Strong collaborations with leading chemical industries.",
    },
    {
      icon: TrendingUp,
      title: "Student Success",
      description:
        "Consistent placement record with top companies.",
    },
  ];

  return (
    <section id="about" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About the Department
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            The Department of Chemical Engineering has been at the forefront of innovation and
            education for over three decades. Shaping the future of chemical engineering through
            cutting-edge research and exceptional academic programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
            <div className="text-4xl font-bold mb-2">125</div>
            <div className="text-sm">Faculty Members</div>
          </div>
          <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
            <div className="text-4xl font-bold mb-2">87</div>
            <div className="text-sm">Research Projects</div>
          </div>
          <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
            <div className="text-4xl font-bold mb-2">345</div>
            <div className="text-sm">Publications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
