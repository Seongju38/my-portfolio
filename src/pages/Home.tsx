import { useEffect, useState } from "react";
import About from "./About";
import Projects from "./Projects";

function Home() {
  const [text, setText] = useState("");
  const fullText = "Welcome to My Portfolio";

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
    <div className="h-screen flex flex-col">
      <div className="flex-grow overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {/* Home Section */}
        <section
          id="home"
          className="h-screen snap-start flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-blue-100 to-white"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2 animate-pulse">
            {text}
          </h1>
          <p className="text-lg text-gray-600">
            프론트엔드 개발자의 여정을 소개합니다.
          </p>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="h-screen snap-start flex items-center justify-center bg-white text-gray-800 px-8"
        >
          <div className="max-w-3xl">
            <About />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="h-screen snap-start flex items-center justify-center bg-gray-100 text-gray-800 px-8"
        >
          <div className="max-w-3xl">
            <Projects />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
