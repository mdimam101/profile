import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

export default function Skills() {

  return (
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Photo</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
            show
          </Row>
          <h1></h1>
        </Container>
      </section>
  );
}
