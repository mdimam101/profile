import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import pic2023 from "../images/pic2023.jpg";
import graduateCeremonyDay from "../images/graduateCeremonyDay.jpg";
import rcvCertificate from "../images/rcvCertificate.jpg";
import pic2022 from "../images/pic2022.jpg";
import pic2022_1 from "../images/pic2022_1.jpg";
import pic2021_1 from "../images/pic2021_1.jpg";
import pic2021 from "../images/pic2021.jpg";
import pic1 from "../images/pic1.jpg";





export default function Skills() {

  return (
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Photo</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
            <h3>Recently photo</h3>
          <img 
              src = {pic2023}
              style={{borderRadius:20}}
              className="w-75 mx-auto"
              />
              <h3>Graduation Ceremony Day  </h3>
              <img 
              src = {graduateCeremonyDay}
              style={{borderRadius:20}}
              className="w-75 mx-auto"
              />
              <hr />
              <img 
              src = {rcvCertificate}
              style={{borderRadius:20}}
              className="w-75 mx-auto"
              />
              <br />
              <h3>photo 2022</h3>
              <img 
              src = {pic2022}
              style={{borderRadius:20}}
              className="w-75 mx-auto"
              />
              <hr />
              <img 
              src = {pic2022_1}
              style={{borderRadius:20}}
              className="w-75 mx-auto"
              
              />
              <p></p>
              <h3>photo 2021</h3>
              <img 
              src = {pic2021}
              style={{borderRadius:20}}
              className="w-75 mx-auto"
              />
              <br />
              <img 
              src = {pic2021_1}
              style={{borderRadius:20}}
              className="w-75 mx-auto"
              />
              <br />
              <img 
              src = {pic1}
              style={{borderRadius:20}}
              className="w-75 mx-auto"
              />

          </Row>
          <h1></h1>
        </Container>
      </section>
  );
}
