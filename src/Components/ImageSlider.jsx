import React, { useState } from "react";

const images = [
  "https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/08/10/16/11/burj-al-arab-2624317_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/21/17/34/las-vegas-1846684_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/11/08/11/22/lounge-2930070_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/12/06/08/12/pool-3001209_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/12/18/06/13/bar-6878056_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/08/10/16/11/burj-al-arab-2624317_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/12/06/08/12/pool-3001209_1280.jpg",
];

const ImageSlider = () => {
  const imagesPerView = 6;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < images.length - imagesPerView) {
      setCurrent((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  const slideWidth = 100 / imagesPerView; // % width of each image

  return (
    <div className="mt-8 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-left mb-4">
        Available Homes in Lahore
      </h1>

      {/* Slider container */}
      <div className="relative w-full h-[250px] overflow-hidden ">
        {/* Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * slideWidth}%)`,
            width: `${(images.length / imagesPerView) * 100}%`,
          }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 p-2"
              style={{ width: `${slideWidth}%` }}
            >
              <img
                src={img}
                alt={`slide-${idx}`}
                className="w-full h-[220px] object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Prev/Next buttons */}
        <button
          onClick={prevSlide}
          disabled={current === 0}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black disabled:opacity-50"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          disabled={current >= images.length - imagesPerView}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black disabled:opacity-50"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
