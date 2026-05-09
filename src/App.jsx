import { useState } from "react";
import BookCover from "./components/BookCover";
import BookPages from "./components/BookPages";
import "./index.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="book-scene">
      <div className="book">      
        {!isOpen && <BookCover onOpen={() => setIsOpen(true)} />}
        
        {isOpen && <BookPages onClose={() => setIsOpen(false)} />}
      </div>
    </div>
  );
}
