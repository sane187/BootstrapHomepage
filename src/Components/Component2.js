import Yoga from "../Assets/image (3).png";
import Dance from "../Assets/image (1).png";
import Fitness from "../Assets/image.png";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Stack, Image, Button } from "react-bootstrap";

const Component2 = () => {
  return (
    <Container fluid className="bg1 flex">
      <Container className="mid px-sm-5 ">
        <Row>
          <Col lg={4} sm={10}>
            <Stack className="align-items-center ">
              <Image fluid src={Yoga} alt="Yoga" />
              <Button className="btn">Join</Button>
            </Stack>
          </Col>
          <Col lg={4} sm={10}>
            <Stack className="align-items-center ">
              <Image fluid src={Dance} alt="Dance" />
              <Button className="btn">Join</Button>
            </Stack>
          </Col>
          <Col lg={4} sm={10}>
            <Stack className="align-items-center ">
              <Image fluid src={Fitness} alt="Fitness" />
              <Button className="btn">Join</Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Component2;
