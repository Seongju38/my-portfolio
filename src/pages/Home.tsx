import { useEffect, useState, ReactNode } from "react";
import About from "./About";
import Projects from "./Projects";

function TerminalWindow({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="h-screen snap-start flex items-center justify-center px-4"
    >
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
        {/* window chrome */}
        <div className="h-10 bg-[#2c001e] flex items-center justify-between px-3">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3.5 w-3.5 rounded-full bg-[#E95420]" />
            <span className="inline-block h-3.5 w-3.5 rounded-full bg-[#F0A513]" />
            <span className="inline-block h-3.5 w-3.5 rounded-full bg-[#7FB800]" />
          </div>
          <div className="text-sm text-white/80 font-medium">{title}</div>
          <div className="w-10" />
        </div>
        {/* body */}
        <div className="bg-[#0c0c0c] text-[#e6e6e6] font-mono p-6 md:p-8">
          {children}
        </div>
      </div>
    </section>
  );
}

function Home() {
  const [text, setText] = useState("");
  const fullText = "Let Everyone Shine";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      const char = fullText.charAt(i);
      setText((prev) => prev + char);
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-[#1a1a1a] via-[#101010] to-[#0a0a0a]">
      <div className="flex-grow overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {/* Home Section */}
        <TerminalWindow title="home — bash" id="home">
          <pre className="whitespace-pre-wrap leading-7 text-sm md:text-base">
            {`seongju@ubuntu:~$ echo "Welcome to My Life"`}
          </pre>
          <h1 className="mt-2 text-2xl md:text-4xl font-bold text-[#9cdcfe]">
            {text}
            <span className="animate-cursor">|</span>
          </h1>
          <p className="mt-3 text-[#b3b3b3]">
            "<span className="text-[#daa520]">이성주</span>"의 여정을{" "}
            <span className="text-[#4ec9b0]">터미널</span>에서 탐색해보세요.
          </p>
          <div className="mt-6 rounded-lg border border-white/10 bg-black/40 p-4 text-sm text-[#d4d4d4]">
            {/* <div className="text-[#4ec9b0]">$</div> */}
            <pre className="mt-1 whitespace-pre-wrap">
              {`# 섹션 이동

  $ cd about       → 소개
  $ cd projects    → 프로젝트
  $ cd contact     → 연락처

# 스크롤하거나, 왼쪽 사이드바 메뉴를 사용하세요.`}
            </pre>
          </div>
        </TerminalWindow>

        {/* About Section */}
        <TerminalWindow title="about — bash" id="about">
          <pre className="text-[#b3b3b3] text-sm">{`seongju@ubuntu:~$ cat about.txt`}</pre>
          <div className="mt-4">
            <About />
          </div>
        </TerminalWindow>

        {/* Projects Section */}
        <TerminalWindow title="projects — bash" id="projects">
          <pre className="text-[#b3b3b3] text-sm">{`seongju@ubuntu:~$ ls ./projects`}</pre>
          <div className="mt-4">
            <Projects />
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
}

export default Home;
