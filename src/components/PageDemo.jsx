const projects = [
  {
    id: 1,
    title: "ToDoList",
    linkType: "Github",
    link: "https://github.com/koticnaja1230/Project-Javascript-TodoList",
    embedType: "youtube", 
    src: "https://www.youtube.com/embed/jElz27voGgM?si=dBmc5F7Hy2kwSU72",
    alt: "ToDoList Demo",
  },
  {
    id: 2,
    title: "สร้างเว็บไซต์ kaidankungch.online",
    linkType: "Github",
    link: "https://github.com/koticnaja1230/project.kaidankungch.online",
    embedType: "youtube",
    src: "https://www.youtube.com/embed/kEZ5bUJcYDg?si=fu4fm0MVTFqGuIIX",
    alt: "Website Demo",
  },
  {
    id: 3,
    title: "AEG APP (Web App)",
    linkType: "Figma",
    link: "https://www.figma.com/proto/ymRdvPBrDeZ6wlgGYxtaCE/AEG-Web-App?node-id=18-42&t=qoRvMNKKGepccLz9-1",
    embedType: "image", 
    src: "public/AEG APP Web App.png", 
    alt: "AEG APP Web App screenshot",
  },
];

export default function PageDemo() {
  return (
    <div className="page-content active" id="page-demo">
      <h2 className="section-title">ตัวอย่างผลงาน</h2>
      <div className="section-line"></div>

      <div className="video-grid">        
        {projects.map((project) => (
          <div className="video-item" key={project.id}>
            <div className="video-header">
              <div className="video-title">{project.title}</div>
              <p className="video-desc">
                {project.linkType} :{" "}
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.link}
                </a>
              </p>
            </div>

            <div className="video-wrapper">              
              {project.embedType === "youtube" ? (
                <iframe
                  src={project.src}
                  title={project.alt}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img src={project.src} alt={project.alt} />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="page-number">— 3 —</div>
    </div>
  );
}
