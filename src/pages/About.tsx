function About() {
  return (
    <section className="max-w-3xl mx-auto px-0 md:px-2 py-2 text-[#e6e6e6] font-mono">
      {/* path hint */}
      <div className="text-xs text-[#b3b3b3] mb-2">~/about.txt</div>

      <h2 className="text-2xl md:text-3xl font-bold text-[#9cdcfe] mb-4">
        About Me
      </h2>

      {/* terminal-like box */}
      <div className="mt-6 rounded-lg border border-white/10 bg-black/30 p-4">
        <div className="text-[#4ec9b0]">$ cat skills --list</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "jQuery",
            "ASP.NET",
            "Tailwind",
            "Vite",
            "Oracle",
            "PL/SQL",
          ].map((t) => (
            <span
              key={t}
              className="text-xs border border-white/10 bg-[#1a1a1a] text-[#9cdcfe] px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 text-[#4ec9b0]">$ echo "highlights"</div>
        <ul className="mt-2 list-disc pl-5 text-sm text-[#b3b3b3] space-y-1">
          <li>Built enterprise UI features with performance & UX in mind.</li>
          <li>Evolving stack → React + TypeScript for scalable components.</li>
          <li>Comfortable collaborating across frontend & database layers.</li>
        </ul>
      </div>

      {/* quick commands */}
      <div className="mt-6 rounded-lg border border-white/10 bg-black/20 p-4">
        <div className="text-[#b3b3b3] text-sm">
          seongju@ubuntu:~$ <span className="text-[#e6e6e6]">cd projects</span>
          <br />
          seongju@ubuntu:~/projects$ <span className="text-[#e6e6e6]">ls</span>
        </div>
        <p className="mt-2 text-xs text-[#7aa2b4]">
          Tip: 왼쪽 사이드바에서{" "}
          <span className="text-[#2fdbff]">Projects</span>로 바로 이동할 수
          있어요. 또는 스크롤을 이용하세요.
        </p>
      </div>
    </section>
  );
}
export default About;
