import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "AI Researcher – Vandal Lab, Politecnico di Torino",
    description: "Engineered embodied sensing pipelines integrating multi-view RGB-D cameras with CoTracker and HaMeR, enabling physics-aware 3D mesh reconstruction of hands and deformable objects during manipulation tasks.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "AI & Computer Vision Intern – EUROBIN Project",
    description: "Architected end-to-end 3D perception pipelines combining classical geometry with deep learning. Achieved 81% precision in object detection and IoU 0.86–0.91 for segmentation using YOLO and Detectron2.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "Teaching Assistant – Human-Computer Interaction",
    description: "Mentored 80+ students across weekly HCI lab sessions at Politecnico di Torino, guiding hands-on prototyping and interface design tasks. Increased project completion rates by 12%.",
    icon: "/cards/card-3.png",
  },
 
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">
                {card.description}
              </p>
              <Link
                href="https://ibiimemon.com/lab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
              >
                LEARN MORE →
              </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

