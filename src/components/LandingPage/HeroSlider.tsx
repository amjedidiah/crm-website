import Container from "../Container";
import Header from "../Header";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SliderNavButton from "./SliderNavButton";

type Pic = {
  src: string;
  alt: string;
};

type Slides = Pic[];

const slides: Slides = [
  {
    src: "https://media.istockphoto.com/id/1472567934/photo/god-helping-hand-concept-and-international-day-of-peace.jpg?s=612x612&w=0&k=20&c=1vqP1lkwFHQMTdaYaBXbjBIsyhWXToXEFxI4W1Zb3ps=",
    alt: "christianity pic",
  },

  {
    src: "https://media.istockphoto.com/id/1191366622/photo/thanking-god-for-all-that-i-have.jpg?s=1024x1024&w=is&k=20&c=vuYUOQMKd3KQH8EnXh0qxVKDaOV8YQf9pjP0mXVDaqo=",
    alt: "christianity pic",
  },

  {
    src: "https://media.istockphoto.com/id/181137325/photo/three-wise-men.webp?s=1024x1024&w=is&k=20&c=ZUd7s8R-goEbSzGYpQQnJK_IGTCw9wLTXClps-tl9Nk=",
    alt: "christianity pic",
  },

  {
    src: "https://media.istockphoto.com/id/1431884361/photo/candle-light-through-ancient-book.jpg?s=2048x2048&w=is&k=20&c=K-L4zoah0GlEUCUkqKkDkrNf4y-NzfbAd1V-E5a1rJs=",
    alt: "christianity pic",
  },
];

function HeroSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideSeconds, setSlideSeconds] = useState(0); //Seconds Counter for slider
  const slide1 = useRef<HTMLImageElement | null>(null);
  const slide2 = useRef<HTMLImageElement | null>(null);
  const slide3 = useRef<HTMLImageElement | null>(null);
  const slide4 = useRef<HTMLImageElement | null>(null);
  const slideRefs = [slide1, slide2, slide3, slide4];

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 10000);
    return () => clearInterval(autoSlide);
  }, []);

  //Displays current slide
  useEffect(() => {
    slideRefs.forEach((ref) => {
      if (currentSlideIndex !== slideRefs.indexOf(ref)) {
        if (ref.current) ref.current.style.opacity = "0";
      } else {
        if (ref.current) ref.current.style.opacity = "1";
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlideIndex]);

  function nextSlide() {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  }

  function prevSlide() {
    setCurrentSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }

  return (
    <Header>
      <Container
        fluid
        className="mt-[50px] md:mt-[47px] lg:mt-[57px] h-[80vh] w-[100vw] md:w-[98.7vw] flex justify-center items-start relative group"
      >
        <Container fluid className="w-[100%] h-[100%] relative">
          {slides.map((slide, index) => {
            return (
              <Image
                key={index}
                data-id={`${index}`}
                src={slide.src}
                alt={slide.alt}
                className="slide w-[100%] h-[100%] top-[0] left-[0] absolute object-cover ease-out duration-[.5s]"
                width={1424}
                height={400}
                ref={slideRefs[index]}
              />
            );
          })}
        </Container>

        <div className="bg-red-800/40 h-full w-full absolute"></div>

        <SliderNavButton onClick={prevSlide} className="left-0">
          <IoIosArrowBack color="white" size="50px" />
        </SliderNavButton>
        <SliderNavButton onClick={nextSlide} className="right-0">
          <IoIosArrowForward color="white" size="50px" />
        </SliderNavButton>
      </Container>
    </Header>
  );
}

export default HeroSlider;
