const contacts = [
  {
    id: "email",
    icon: "✉",
    iconStyle: {},
    label: "Email",
    value: "noteza1230@gmail.com",
    href: "mailto:noteza1230@gmail.com",
  },
  {
    id: "github",
    icon: "GH",
    iconStyle: { fontSize: "14px", fontWeight: 700 },
    label: "GitHub",
    value: "https://github.com/koticnaja1230",
    href: "https://github.com/koticnaja1230",
    target: "_blank",
  },
  {
    id: "phone",
    icon: "☎",
    iconStyle: { fontSize: "13px", fontWeight: 700 },
    label: "Mobile Phone",
    value: "062-374-7280",
    href: "tel:062-374-7280",
  },
];

export default function PageContact() {
  return (
    <div className="page-content active" id="page-contact">
      <h2 className="section-title">Contact</h2>
      <div className="section-line"></div>

      <ul className="contact-list">        
        {contacts.map((c) => (
          <li key={c.id}>
            <a
              href={c.href}
              className="contact-item"
              target={c.target || "_self"}
              rel={c.target === "_blank" ? "noreferrer" : undefined}
            >
              <div className="contact-icon" style={c.iconStyle}>
                {c.icon}
              </div>
              <div>
                <div className="contact-label">{c.label}</div>
                <div className="contact-value">{c.value}</div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <div className="page-number">— 4 —</div>
    </div>
  );
}
