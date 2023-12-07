import React from "react";
import styled from "styled-components";

export default function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true} muted>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 25px;
  padding: 30px 0px 26px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  padding-top: 52.6%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.9);
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  img {
    inset: 0px;
    display: block;
    width: 100%;
    opacity: 1;
    object-fit: cover;
    position: absolute;
    top: 0;
  }

  video{
    display: none;
    position: absolute;
    object-fit: cover;
    width: 100%;
    top: 0;
    left: 0;
  }

  &:hover {
      transform: scale(1.05);
      border-color: rgba(249, 249, 249, 0.8);
      video{
        display: block;
      }
  }
`;
