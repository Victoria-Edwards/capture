import React from "react";
import home1 from "../img/home1.png";
//Styled
//import styled from "styled-components";
import {
  StyledLayout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../styles";

const AboutSection = () => {
  return (
    <StyledLayout>
      <StyledDescription>
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="guy with a camera in darkness" />
      </StyledImage>
    </StyledLayout>
  );
};

export default AboutSection;
