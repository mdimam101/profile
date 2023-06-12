import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Link } from "react-scroll";
import styled from "styled-components";
// Icons
import { Icon } from "@iconify/react";
// Media
import Logo from "../images/logo.svg";

import pic2023 from "../images/pic2023.jpg";
import { Light, Dark } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Spin } from "./globalStyledComponents";
import SocialLinks from "./SocialLinks";

const StyledHero = styled.header`
  position: relative;
  display: grid;
  // place-items: center;
  max-width: 1920px;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "linear-gradient(135deg, var(--primary), var(--bs-light))"
        : "linear-gradient(135deg, var(--primary), var(--bs-dark))"};
    z-index: -2;
  }

  /* Overlay for contrast */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.name === "light"
        ? `url(${Dark}) top center fixed no-repeat`
        : `url(${Dark}) top center fixed no-repeat`};
    z-index: -1;
  }

  .down-container {
    height: 10rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    .hero-img {
      animation: ${Spin} infinite 20s linear;
    }
  }

  @media screen and (min-width: 1180px) {
    &::before {
      background: ${({ theme }) =>
        theme.name === "light"
          ? `url(${Dark}) top center fixed no-repeat`
          : `url(${Dark}) top center fixed no-repeat`};
      background-size: 100vw auto;
    }
  }

  @media screen and (min-width: 1367px) {
    &::before {
      background: ${({ theme }) =>
        theme.name === "light"
          ? `url(${Dark}) top center fixed no-repeat`
          : `url(${Dark}) center center fixed no-repeat`};
      background-size: cover;
    }
  }
`;

export default function Hero() {
  const { name } = useSelector(selectData);

  return (
    <StyledHero>
      <Container>
        <Row className=" text-center" style={{paddingTop: "50px"}}>
          {/* <Col> */}
            {/* <h1 className="mb-0 display-3 title">{name}</h1> */}
            <h1>Hi!</h1>
            <h2>I am Imam</h2>
            <h3>Software Engineer(Japan)</h3>
            <div className="d-flex align-items-center justify-content-center">
              {/* <SocialLinks /> */}
              <img 
              src = {pic2023}
              style={{borderRadius:180}}
              className="w-75 mx-auto"
              />
            </div>
          {/* </Col> */}
          {/* <Col className="d-none d-md-block">
            <img
              src={Logo}
              alt="React Logo"
              className="w-75 mx-auto hero-img"
            />
          </Col> */}
        </Row>
        {/* <Row className="align-items-end down-container">
          <Col className="m-4 text-center">
            <Link to={"About"} className="link-icons">
              <Icon icon="fa6-solid:circle-chevron-down" />
            </Link>
          </Col>
        </Row> */}
      </Container>
    </StyledHero>
  );
}