import { useState } from "react";
import PageAbout from "./PageAbout";
import PageDemo from "./PageDemo";
import PageContact from "./PageContact";

const TABS = [
  { id: "about", label: "เกี่ยวกับฉัน" },
  { id: "demo", label: "ตัวอย่างผลงาน" },
  { id: "contact", label: "ติดต่อ" },
];

export default function BookPages({ onClose }) {
  const [activePage, setActivePage] = useState("about"); 

  return (
    <div className="book-pages open" id="bookPages">
      
      <nav className="page-nav">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activePage === tab.id ? "active" : ""}`}
            onClick={() => setActivePage(tab.id)}
          >
            {tab.label}
          </button>
        ))}
        <button className="close-book" onClick={onClose}>
          ✕ ปิด
        </button>
      </nav>

      {/* แสดง Page ที่ตรงกับ tab ที่เลือก */}
      {activePage === "about" && <PageAbout />}
      {activePage === "demo" && <PageDemo />}
      {activePage === "contact" && <PageContact />}
    </div>
  );
}
