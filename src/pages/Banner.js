import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        dynamicHeight={true}
      >
        <div>
          <img
            loading='lazy'
            src='https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a'
            alt=''
          />
        </div>
        <div>
          <img loading='lazy' src='https://links.papareact.com/6ff' alt='' />
        </div>
        <div>
          <img loading='lazy' src='https://links.papareact.com/7ma' alt='' />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
