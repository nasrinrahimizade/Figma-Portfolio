export default function Education(): React.JSX.Element {
  const education = [
    {
      degree: "Master of Science",
      field: "Computer Engineering, Minor: Artificial Intelligence",
      school: "Politecnico di Torino",
      location: "Torino, Italy",
      period: "Sep 2022 – Oct 2025",
      thesis: "3D perception of deformable objects in robotic applications",
      highlights: ["Fully Funded MSc Thesis – EUROBIN Project"],
    },
    {
      degree: "Bachelor of Science",
      field: "Electrical Engineering",
      school: "Shahid Beheshti University",
      location: "Tehran, Iran",
      period: "Sep 2017 – Jun 2021",
      thesis: "A review of Electronic Systems of Autonomous Cars",
      highlights: ["Top 15% – Electrical Engineering Class (14th of 120 students)", "1st Place – Robotic Navigation Competition (Beheshti Cup)"],
    },
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 rounded-xl p-8 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-purple-400 font-medium">{edu.field}</p>
                  <p className="text-white/70">{edu.school} — {edu.location}</p>
                </div>
                <span className="text-white/50 text-sm mt-2 lg:mt-0">{edu.period}</span>
              </div>
              <p className="text-white/60 text-sm mb-4">
                Thesis: <span className="text-white/80 italic">{edu.thesis}</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1 text-sm text-white/80 bg-white/10 rounded-full border border-purple-500/30"
                  >
                    🏆 {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}