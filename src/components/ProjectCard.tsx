type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

function ProjectCard({ title, description, tech, github }: ProjectProps) {
  return (
    <div
      className="
        rounded-xl border border-white/10 bg-[#0e0e0e]/90 p-5
        shadow-[0_8px_30px_rgba(0,0,0,.25)]
        hover:shadow-[0_8px_40px_rgba(0,238,255,.25)]
        transition
        text-[#e6e6e6] font-mono
      "
    >
      <div>
        <h3 className="text-lg font-semibold text-[#4ec9b0] mb-2">{title}</h3>
        <p className="text-sm text-[#b3b3b3] mb-4 leading-6">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="text-xs border border-white/10 bg-[#1a1a1a] text-[#9cdcfe] px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-sm text-[#2fdbff] hover:underline"
      >
        $ open {github.replace(/^https?:\/\//, "")}
      </a>
    </div>
  );
}

export default ProjectCard;
