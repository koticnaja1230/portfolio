export default function BookCover({ onOpen }) {
  return (
    <div className="book-cover" id="bookCover" onClick={onOpen}>
      <div className="cover-ornament">✦ ✦ ✦</div>
      <h1 className="cover-title">My Portfolio</h1>
      <div className="cover-divider"></div>
      <p className="cover-name">Chutiphon Chutiphakul (Note)</p>
      <p className="cover-name">ชุติพนธ์ ชุติภากุล (โน๊ต)</p>
      <span className="cover-cta">— Open —</span>
    </div>
  );
}
