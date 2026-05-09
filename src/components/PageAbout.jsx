const skills = ["Html", "CSS", "JavaScript", "MySQL", "UI/UX Design"];
const frameworks = ["React", "Bootstrap"];
const tools = ["ChatGPT", "Gemini", "Claude", "Github Copilot", "Visual Studio Code", "Figma"];

export default function PageAbout() {
  return (
    <div className="page-content active" id="page-about">
      <h2 className="section-title">About me</h2>
      <div className="section-line"></div>

      <div className="about-grid">        
        <div className="avatar-circle">
          <img src="public/S__110870531.jpg" alt="Avatar photo" />
        </div>

        <div>
          <p>
            <strong>ตำแหน่งงานที่อยากสมัคร</strong> Frontend Developer,
            Backend Developer, Fullstack Developer, Web Developer, UI/UX Designer
          </p>
          <p>
            <strong>จุดเด่น</strong> สามารถเรียนรู้การทำงานได้รวดเร็ว
            มีวิธีคิดและแก้ปัญหาอย่างเป็นระบบ สามารถใช้ AI tools ได้หลากหลาย
          </p>
          <p>
            <strong>จุดด้อย</strong> ยังไม่มีประสบการณ์ทำงานจริงในสายงานที่นี้
            แต่มีความตั้งใจและพร้อมเรียนรู้อย่างรวดเร็วเพื่อพัฒนาตัวเองให้เหมาะสมกับตำแหน่งงานที่สมัคร
          </p>
          
          <div className="skills-grid">
            <p><strong>Skill</strong></p>
            {skills.map((s) => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>

          <div className="skills-grid">
            <p><strong>Frameworks</strong></p>
            {frameworks.map((f) => (
              <span key={f} className="skill-tag">{f}</span>
            ))}
          </div>

          <div className="skills-grid">
            <p><strong>Tools</strong></p>
            {tools.map((t) => (
              <span key={t} className="skill-tag">{t}</span>
            ))}
          </div>          
        </div>
      </div>

      <div className="page-number">— 1 —</div>
    </div>
  );
}
