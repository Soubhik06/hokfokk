const Schedule = () => {
  const day1Schedule = [
    { time: "09:00 AM", title: "Inauguration Ceremony", description: "Opening" },
    { time: "10:00 AM", title: "Keynote", description: "Keynote" },
    { time: "12:00 PM", title: "Lunch", description: "Lunch" },
    { time: "02:00 PM", title: "Poster", description: "Poster" },
  ];

  const day2Schedule = [
    { time: "09:00 AM", title: "Paper", description: "Oral Presentation" },
    { time: "11:00 AM", title: "Tech Talk Session", description: "Expert" },
    { time: "12:00 PM", title: "Lunch", description: "Lunch" },
    { time: "02:00 PM", title: "Prize Distribution & Closing", description: "Closing" },
  ];

  return (
    <section id="schedule" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
            📅 Event Schedule
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">Two-Day Program</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Day 1 */}
          <div className="bg-card rounded-lg shadow-sm p-6 border border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <h3 className="text-xl font-bold text-foreground">Day 1 - March 15</h3>
            </div>
            <div className="space-y-4">
              {day1Schedule.map((item, index) => (
                <div key={index} className="flex gap-4 pb-4 border-b border-border last:border-0">
                  <div className="text-primary font-semibold text-sm whitespace-nowrap">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-card rounded-lg shadow-sm p-6 border border-border">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <h3 className="text-xl font-bold text-foreground">Day 2 - March 16</h3>
            </div>
            <div className="space-y-4">
              {day2Schedule.map((item, index) => (
                <div key={index} className="flex gap-4 pb-4 border-b border-border last:border-0">
                  <div className="text-primary font-semibold text-sm whitespace-nowrap">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
