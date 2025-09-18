import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Ubuntu-like Terminal Landing
 * - 처음 진입 "/" 라우트에서 보여줌
 * - 명령 예시:
 *   help, ls, cat README.md, clear
 *   build, run, start, build && run
 *   about, projects, contact, home
 * - build/run 은 애니메이션 출력 후 /home 등으로 이동
 */
type Line = { type: "prompt" | "stdout" | "system"; text: string };

const PROMPT_USER = "seongju";
const PROMPT_HOST = "ubuntu";
const PROMPT_PATH = "~";
const PROMPT = `${PROMPT_USER}@${PROMPT_HOST}:${PROMPT_PATH}$`;

const Terminal: React.FC = () => {
  const navigate = useNavigate();
  const [lines, setLines] = useState<Line[]>([
    { type: "system", text: "Ubuntu 24.04 LTS (Jammy) — tty1" },
    {
      type: "stdout",
      text: `Welcome, ${PROMPT_USER}. Type "help" to get started.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false); // build/run 중 중복 방지
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () =>
    endRef.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    scrollToBottom();
  }, [lines]);

  useEffect(() => {
    // 어디를 클릭해도 입력 박스 포커스
    const focus = () => inputRef.current?.focus();
    window.addEventListener("click", focus);
    focus();
    return () => window.removeEventListener("click", focus);
  }, []);

  const print = (text: string, type: Line["type"] = "stdout") =>
    setLines((prev) => [...prev, { type, text }]);

  const printPrompt = (cmd: string) =>
    setLines((prev) => [...prev, { type: "prompt", text: `${PROMPT} ${cmd}` }]);

  const clear = () => setLines([]);

  const simulateBuild = async () => {
    setBusy(true);
    const steps = [
      "npm ci",
      "Compiling modules…",
      "Transpiling TypeScript…",
      "Optimizing assets…",
      "Bundling with Vite…",
      "Generating sitemap…",
      "Build complete in 2.4s.",
    ];
    for (const s of steps) {
      print(s);
      await new Promise((r) => setTimeout(r, 500));
    }
    setBusy(false);
  };

  const navigateWithEcho = (path: string, echo: string) => {
    print(echo);
    setTimeout(() => navigate(path), 600);
  };

  const handleCommand = async (raw: string) => {
    if (!raw) {
      print(""); // 빈 줄
      return;
    }
    const cmd = raw.trim();
    printPrompt(cmd);

    // 사전 처리
    if (cmd === "clear") {
      clear();
      return;
    }
    if (cmd === "help") {
      print(
        [
          "",
          "Available commands:",
          "  help                Show this help",
          "  ls                  List sections",
          "  cat README.md       Show intro",
          "  build               Simulate building portfolio",
          "  run | start         Launch portfolio (/home)",
          "  build && run        Build then launch",
          "  about               Go to /about",
          "  projects            Go to /projects",
          "  contact             Go to /contact",
          "  home                Go to /home",
          "  clear               Clear screen",
          "",
        ].join("\n")
      );
      return;
    }
    if (cmd === "ls") {
      print("about  projects  contact  README.md");
      return;
    }
    if (cmd === "cat README.md") {
      print(
        [
          "# my-portfolio",
          "- Tech: React + TS + Tailwind + Vite",
          "- Tip: try `build && run` or just `start`",
        ].join("\n")
      );
      return;
    }

    // 라우팅 명령
    if (cmd === "about") return navigateWithEcho("/about", "Opening About…");
    if (cmd === "projects")
      return navigateWithEcho("/projects", "Opening Projects…");
    if (cmd === "contact")
      return navigateWithEcho("/contact", "Opening Contact…");
    if (cmd === "home") return navigateWithEcho("/home", "Opening Home…");

    // 실행/빌드
    if (cmd === "build") {
      if (busy) return print("another process is running…");
      await simulateBuild();
      return;
    }
    if (cmd === "run" || cmd === "start") {
      if (busy) return print("another process is running…");
      print("Starting dev server at http://localhost:5173 …");
      return navigateWithEcho("/home", "Launching portfolio…");
    }
    if (cmd === "build && run") {
      if (busy) return print("another process is running…");
      await simulateBuild();
      print("Starting dev server at http://localhost:5173 …");
      return navigateWithEcho("/home", "Launching portfolio…");
    }

    // 기본: not found
    print(`bash: ${cmd}: command not found`);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input;
    setInput("");
    void handleCommand(cmd);
  };

  // 간단 탭 자동완성 (help/h, build/b, start/s)
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const map: Record<string, string> = {
        h: "help",
        he: "help",
        b: "build",
        s: "start",
        r: "run",
        pr: "projects",
        ab: "about",
        co: "contact",
      };
      const found = map[input] || "";
      if (found) setInput(found);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#2c001e] via-[#3d0f3a] to-[#1a1a1a] flex items-center justify-center p-4">
      {/* Ubuntu window chrome */}
      <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
        <div className="h-10 bg-[#2c001e] flex items-center justify-between px-3">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3.5 w-3.5 rounded-full bg-[#E95420]" />
            <span className="inline-block h-3.5 w-3.5 rounded-full bg-[#F0A513]" />
            <span className="inline-block h-3.5 w-3.5 rounded-full bg-[#7FB800]" />
          </div>
          <div className="text-sm text-white/80 font-medium">
            Terminal — {PROMPT_USER}@{PROMPT_HOST}: {PROMPT_PATH}
          </div>
          <a
            href="/home"
            className="text-xs text-white/60 hover:text-white/90 transition"
            onClick={(e) => {
              e.preventDefault();
              navigate("/home");
            }}
          >
            Skip ⏩
          </a>
        </div>

        {/* Terminal body */}
        <div className="bg-[#0c0c0c] text-[#e6e6e6] font-mono text-sm leading-6 p-4 md:p-6 h-[70vh] md:h-[75vh] overflow-y-auto">
          {lines.map((l, i) => (
            <pre
              key={i}
              className={
                l.type === "prompt"
                  ? "text-[#9cdcfe]"
                  : l.type === "system"
                  ? "text-[#b3b3b3]"
                  : "text-[#e6e6e6] whitespace-pre-wrap"
              }
            >
              {l.type === "prompt" ? l.text : l.text}
            </pre>
          ))}

          {/* prompt input */}
          <form onSubmit={onSubmit} className="flex items-center gap-2">
            <span className="text-[#4ec9b0]">{PROMPT}</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              className="bg-transparent outline-none border-none flex-1 caret-white"
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
            />
            {/* <span className="ml-[-1ch] w-[1ch] inline-block bg-white h-4 self-end animate-cursor" /> */}
          </form>

          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
