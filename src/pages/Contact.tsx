import { useState } from "react";

const TO_EMAIL = "ljg013@naver.com";

export default function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [msg, setMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(TO_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // clipboard 미지원
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const subject = `[Portfolio] ${name || "Visitor"} 문의`;
    const body = `From: ${name} <${from}>\n\n${msg}`;
    const href = `mailto:${TO_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href; // 기본 메일 클라이언트 열기
  };

  return (
    <div className="font-mono text-[#e6e6e6]">
      <div className="rounded-lg border border-white/10 bg-black/30 p-4 text-sm">
        <pre className="mt-1 whitespace-pre-wrap">{`# 아래 폼을 사용하거나, 직접 메일을 보내주세요.
$ echo "Hello, Seongju!" | mail -s "Portfolio Contact" ${TO_EMAIL}`}</pre>

        <div className="mt-3 flex items-center gap-3">
          <button
            type="button"
            onClick={copyEmail}
            className="px-3 py-1.5 text-xs rounded border border-white/10 bg-[#1a1a1a] hover:bg-white/10 transition"
          >
            {copied ? "Copied ✓" : "Copy email"}
          </button>
          <a
            href={`mailto:${TO_EMAIL}`}
            className="text-xs text-[#2fdbff] hover:underline"
          >
            Open mail client ↗
          </a>
        </div>
      </div>

      {/* 폼 */}
      <form
        onSubmit={handleSubmit}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="md:col-span-1">
          <label className="block text-xs text-[#b3b3b3] mb-1">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border border-white/10 bg-[#0f0f0f] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#2fdbff]"
            placeholder="Your name"
          />
        </div>

        <div className="md:col-span-1">
          <label className="block text-xs text-[#b3b3b3] mb-1">Email</label>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            type="email"
            className="w-full rounded border border-white/10 bg-[#0f0f0f] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#2fdbff]"
            placeholder="you@example.com"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs text-[#b3b3b3] mb-1">Message</label>
          <textarea
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            required
            rows={6}
            className="w-full rounded border border-white/10 bg-[#0f0f0f] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#2fdbff] resize-y"
            placeholder="Write your message..."
          />
        </div>

        <div className="md:col-span-2 flex items-center gap-3 justify-end">
          <button
            type="submit"
            disabled={!msg.trim()}
            className="px-4 py-2 rounded bg-[#2fdbff] text-black text-sm font-semibold hover:brightness-95 disabled:opacity-50"
          >
            Send via email client
          </button>
          <button
            type="button"
            onClick={() => {
              setName("");
              setFrom("");
              setMsg("");
            }}
            className="px-4 py-2 rounded border border-white/10 text-sm hover:bg-white/10"
          >
            Clear
          </button>
        </div>
      </form>

      <div className="mt-6 rounded-lg border border-white/10 bg-black/20 p-4 text-sm">
        <div className="text-[#b3b3b3]">
          seongju@ubuntu:~${" "}
          <span className="text-[#e6e6e6]">open channels</span>
        </div>
        <ul className="mt-2 list-disc pl-6 space-y-1">
          <li>
            GitHub —{" "}
            <a
              href="https://github.com/Seongju38"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2fdbff] hover:underline"
            >
              github.com/Seongju38
            </a>
          </li>
          <li>
            Tistory —{" "}
            <a
              href="https://i-can-do-it-38.tistory.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2fdbff] hover:underline"
            >
              i-can-do-it-38.tistory.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
