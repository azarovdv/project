import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function SliderPhoto({ oneAnimal }) {
  const styleSliderContainer = {
    minHeight: '200px',
    minWidth: '200px',
  };
  const imgStyle = {
    padding: '0',
    width: '296px',
    height: '260px',
    objectFit: 'cover',
    // margin: '10px 0',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
  };

  return (
    <div style={styleSliderContainer}>
      <Carousel interval={null}>
        {oneAnimal?.Photos?.map((photo, index) => (
          <Carousel.Item key={index}>
            <img style={imgStyle} src={photo.path} alt={`Animal ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default SliderPhoto;

// {
/* <Carousel {...additionalSettings}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 " src={image} alt={`Slide ${index + 1}`} />
          </Carousel.Item>
        ))}
      </Carousel> */
// }
