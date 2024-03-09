import { Container, Row, Col, Tab } from "react-bootstrap";
import "animate.css";
import certImg1 from "../assets/img/certificates/Javascript.jpg";
import certImg2 from "../assets/img/certificates/The Web Developer Bootcamp 2022 with Colt.jpg";
import certImg3 from "../assets/img/certificates/Coursera Google UX design certificate.jpg";
import certImg4 from "../assets/img/certificates/Lärarlegitimation.jpg";

export const Certificates = () => {
  const certificates = [
    {
      imgUrl: certImg1,
    },
    {
      imgUrl: certImg2,
    },
    {
      imgUrl: certImg3,
    },
    {
      imgUrl: certImg4,
    },
  ];

  return (
    <section className="certificate" id="certificate">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Certificates</h2>
            <Tab.Container>
              <Tab.Content>
                <Row>
                  {certificates.map((certificate, index) => (
                    <Col size={12} sm={6} md={4} key={index}>
                      <div className="cert-imgbx">
                        <img src={certificate.imgUrl} />
                      </div>
                    </Col>
                  ))}
                </Row>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
