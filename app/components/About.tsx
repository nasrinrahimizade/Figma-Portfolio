import Image from "next/image";

export default function About(): React.JSX.Element {

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-2xl max-w-6xl mx-auto">
           I build AI systems that help machines <span className="text-purple-400">understand the world</span><br/> <span className="text-sm">through Computer Vision, Multimodal Perception, and LLM-integrated pipelines</span>
          </p>
        </div>
        <Image 
          src="/assets/illustration.png"
          alt="Skills"
          width={800}
          height={800}
          className="object-cover mx-auto"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </section>
  );
}

