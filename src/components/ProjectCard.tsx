type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  github: string;
};

function ProjectCard({ title, description, tech, github }: ProjectProps) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, idx) => (
            <span
              key={idx}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
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
        className="mt-auto text-sm text-blue-600 hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  );
}

export default ProjectCard;
