import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
// Data
import { moreInfo } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

export default function AboutMe() {
  const { avatar_url, bio } = useSelector(selectData);

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Overview</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="text-center">
              <Container style={{textAlign:"left", justifyContent:"center"}}>

                {/* <p>{bio}</p> */}
                <p style={{fontSize: "17px", fontStyle:"italic"}}>❐ Work as Software development at IT company (Japan)</p>
                <p style={{fontSize: "17px", fontStyle:"italic"}}>❐ Annul Income : As a Junior 22Lakh+</p>
                <p style={{fontSize: "17px", fontStyle:"italic"}}>❐ Study : Software Engineering in (Japan)</p>
                <p style={{fontSize: "17px", fontStyle:"italic"}}>❐ Hometown : Narayanganj, Bandar</p>
                <p style={{fontSize: "17px", fontStyle:"italic"}}>❐ Lives in Tokyo</p>
                <p style={{fontSize: "17px", fontStyle:"italic"}}>{moreInfo}& </p>
              </Container>
            </Col>
            {/* <Col className="d-none d-md-block text-center">
              <img
                src={avatar_url}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col> */}
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
