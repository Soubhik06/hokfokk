import { Calendar, MapPin, Users } from "lucide-react";

const EventDetails = () => {
  const details = [
    {
      icon: Calendar,
      title: "2-Days Conference",
      subtitle: "November 14-15, 2025",
      description: "Two full days of technical content",
    },
    {
      icon: MapPin,
      title: "Venue",
      subtitle: "HL, RDIT Auditorium",
      description: "Registration at 10AM",
    },
    {
      icon: Users,
      title: "Participants",
      subtitle: "500+ Expected",
      description: "Students, Faculty & Industry Leaders",
    },
  ];

  return (
    <section id="events" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
            🎯 Event Schedule
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Event Details</h2>
          <p className="text-muted-foreground">
            Everything you need to know about Alchemix 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <detail.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {detail.title}
              </h3>
              <p className="text-primary font-semibold mb-2">{detail.subtitle}</p>
              <p className="text-sm text-muted-foreground">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
