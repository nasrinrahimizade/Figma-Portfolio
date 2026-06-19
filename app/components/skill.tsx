export default function Skills(): React.JSX.Element {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "Java", "JavaScript", "SQL"],
    },
    {
      title: "ML Frameworks & Libraries",
      skills: ["PyTorch", "TensorFlow", "Keras", "HuggingFace", "OpenCV", "LangChain", "ChromaDB", "Streamlit", "BLIP-2"],
    },
    {
      title: "Computer Vision & AI",
      skills: ["Object Detection", "Instance Segmentation", "3D Vision", "Point Cloud Processing", "Multimodal AI", "RAG", "LLM Integration", "Vision Transformers"],
    },
    {
      title: "Models & Architectures",
      skills: ["YOLO", "Mask R-CNN", "Detectron2", "SAM", "Grounding DINO", "CoTracker", "HaMeR", "ERFNet"],
    },
    {
      title: "MLOps & Tools",
      skills: ["AWS", "Azure", "Docker", "Git/GitHub", "CI/CD", "Linux", "CUDA", "Label Studio"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900"
            >
              <h3 className="text-xl font-semibold text-purple-400 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm text-white/80 bg-white/10 rounded-full border border-purple-500/30"
                  >
                    {skill}
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