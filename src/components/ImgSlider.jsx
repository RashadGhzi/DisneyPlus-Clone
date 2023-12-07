import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link  } from "react-router-dom";
export default function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Carousel {...settings}>
        <Wrap>
          <Link>
            <img src="/images/slider-badag.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link>
            <img src="/images/slider-badging.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link>
            <img src="/images/slider-scale.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link>
            <img src="/images/slider-scales.jpg" alt="" />
          </Link>
        </Wrap>
      </Carousel>
    </>
  );
}

const Carousel = styled(Slider)`
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
  }

  & > button:hover {
    opacity: 1;
    transition: opacity 0.2s ease 0s;
  }

  ul li button {
    &::before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  ul li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border: 4px solid transparent;
    display: block;
    position: relative;

    img {
      height: 100%;
      width: 100%;
    }

    &:hover {
      border: 4px solid white;
      transition-duration: 300ms;
    }
  }
`;
