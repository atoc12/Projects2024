import './accordion.css';
import React, { useEffect, useState } from 'react';


export const AccordionItem = ({ title, isOpen, onClick,className="", children }) => (
  
  <div className="accordion-item">
    <div className="accordion-title" onClick={onClick}>
      {title}
    </div>
    <div className={`accordion-content ${className} `} data-open={isOpen ? "visible" : "hidden"} >{children}</div>
  </div>
);

export const Accordion = ({ customOpen = false , openAll = false, multiple = false, className, children }) => {

  const [openIndex, setOpenIndex] = useState([]);

  useEffect(() => {

    if ( openAll) {

      const allIndexes = React.Children.map(children, (_, index) => index);

      setOpenIndex(allIndexes);
    }

  }, [openAll, children]);

  const handleClick = (index) => {

    if (multiple || openAll) { // si se permite abrir multiples

      const elementsOpen = openIndex.includes(index) // Si openIndex contiene el valor de index
        ? openIndex.filter(item => item !== index) // entonces que filtre el Array con todos los valores menos el indicado
        : [...openIndex, index]; // en caso contrario agrega el valor del index a un Array clonado del openIndex

      setOpenIndex(elementsOpen);// se agrega el valor dado por elementOpens

    } else { // en caso contrario

      setOpenIndex(openIndex === index ? null : index); // se valida en un ternario si openIndex es igual a index null si cumple y index en caso que no
    }
  };

  return (
    <div className={`accordion ${className}`}>
      {React.Children.map(children, (child, index) => (
        React.cloneElement(child, {
          isOpen: multiple || openAll ? openIndex.includes(index) : openIndex === index,
          onClick: () => handleClick(index),
        })
      ))}
    </div>
  );
};
