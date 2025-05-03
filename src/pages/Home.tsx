function Home() {
  return (
    <section className="h-full flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Hi, I'm Seong Ju👋
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-xl">
        A frontend developer passionate about building clean, user-focused, and
        scalable web interfaces using modern technologies like React and
        TypeScript.
      </p>
      <a
        href="/projects"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hove:bg-blue-700 transition"
      >
        View My Projects
      </a>
    </section>
  );
}

export default Home;
