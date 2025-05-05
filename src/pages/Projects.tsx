import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "건강정보알리미",
      description:
        "질병 데이터와 병원/약국 위치 정보를 제공하는 React 기반 웹 앱. 공공 API와 Kakao 지도 API를 활용.",
      tech: ["React", "ASP.NET", "Kakao API"],
      github: "https://github.com/Seongju38/health-info",
    },
    {
      title: "Memo Project",
      description:
        "메모를 작성, 수정, 삭제할 수 있는 React 학습용 프로젝트. localStorage 연동.",
      tech: ["React", "TypeScript"],
      github: "https://github.com/Seongju38/memo-project",
    },
    {
      title: "Survey Pie",
      description:
        "React 기반 설문조사 UI 프로토타입. 사용자 선택 기반 결과 수집 처리.",
      tech: ["React"],
      github: "https://github.com/Seongju38/survey-pie",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
