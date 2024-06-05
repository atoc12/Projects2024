import './slider.css';
import React,{ useRef ,Children} from "react"

export const Slider = ({className="",loading=false,size=3,element=<></>,children})=>{

    const sliderRef = useRef(null);
    
    const handleScroll = (direction) => {
        const slider = sliderRef.current;
        if (slider) {
          const itemWidth = slider.querySelector('.item').offsetWidth;
          slider.scrollBy({ left: direction * itemWidth, behavior: 'smooth' });
        }
    };

    return (
      <div className='test-slider'>
        <button onClick={()=>handleScroll(-1)}>&#10094;</button>
        <div className='test-slider-content' ref={sliderRef}>

          {
            loading ? 
              Array.from({length:size}).map((data,key)=>{
                return(
                  <div className="item" key={key}>
                      {element}
                  </div>
                )
                
              })

            : Children.map(children, child =>
                <div className="item">
                    {child}
                </div>
            )
          }

        </div>
        <button onClick={()=>handleScroll(1)}>&#10095;</button>
      </div>
    );
};