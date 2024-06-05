import './accordion.css';
import React, { useState } from 'react';

// Componente AccordionItem
export const AccordionItem = ({ title, isOpen, onClick, children }) => (
  <div className="accordion-item">
    <div className="accordion-title" onClick={onClick}>
      {title}
    </div>
    {isOpen && <div className="accordion-content">{children}</div>}
  </div>
);

export const Accordion = ({ className, children }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`accordion ${className} `}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openIndex === index,
          onClick: () => handleClick(index),
        })
      )}
    </div>
  );
};
