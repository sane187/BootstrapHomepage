import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";
function Component1() {
  return (
    <Container fluid className="flex bg text-white ">
      <Container className="px-2">
        <Row>
          <Col lg={6} md={10} sm={12}>
            <h1 style={{ fontSize: 60 }} class="heading">
              We are here <br /> to help you <br />
              with all your <br />
              training <br />
              needs.
            </h1>
          </Col>
          <Col lg={6} md={10} sm={12} style={{ marginTop: 25 }}>
            <div className="flex flex-column">
              <h3>
                {" "}
                <ChevronRight className="icon" />
                Fitness
              </h3>
              <h3>
                {" "}
                <ChevronRight className="icon" />
                Strength And Conditioning
              </h3>
              <h3>
                {" "}
                <ChevronRight className="icon" />
                Sports Drills
              </h3>
              <h3>
                {" "}
                <ChevronRight className="icon" />
                Skills
              </h3>
              <h3>
                {" "}
                <ChevronRight className="icon" />
                Diet Regimes
              </h3>
              <h3>
                {" "}
                <ChevronRight className="icon" />
                Psychology
              </h3>
              <h3>
                {" "}
                <ChevronRight className="icon" />
                Injury Prevention
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Component1;
