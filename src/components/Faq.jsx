
import { useState } from "react";
import "../css/Accordion.css";

 function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-question" onClick={() => setOpen(!open)}>
        {question}
        <span className="arrow">{open ? "▲" : "▼"}</span>
      </div>
      {open && <div className="accordion-answer">{answer}</div>}
    </div>
  );
}

export default AccordionItem