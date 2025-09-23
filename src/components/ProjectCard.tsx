type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  notion?: string; // ← 추가
};

function ProjectCard({
  title,
  description,
  tech,
  github,
  notion,
}: ProjectProps) {
  const primaryLink = notion || github;

  const openPrimary = () => {
    if (!primaryLink) return;
    window.open(primaryLink, "_blank", "noopener,noreferrer");
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if ((e.key === "Enter" || e.key === " ") && primaryLink) {
      e.preventDefault();
      openPrimary();
    }
  };

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={openPrimary}
      onKeyDown={onKeyDown}
      className="
        cursor-pointer rounded-xl border border-white/10 bg-[#0e0e0e]/90 p-5
        shadow-[0_8px_30px_rgba(0,0,0,.25)]
        hover:shadow-[0_8px_40px_rgba(0,238,255,.25)]
        transition
        text-[#e6e6e6] font-mono
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2fdbff] focus-visible:ring-offset-[#0a0a0a]
      "
      aria-label={`${title} 상세 페이지 열기`}
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

      <div className="mt-2 flex items-center justify-between">
        {primaryLink && <></>}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-block text-sm text-[#2fdbff] hover:underline"
          >
            $ open {github.replace(/^https?:\/\//, "")} →
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
