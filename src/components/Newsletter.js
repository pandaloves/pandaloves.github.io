import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp" id="connect">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Please write me an Email to contact me!</h3>
          </Col>
          <Col md={6} xl={7}>
            <div className="new-email-bx">
              <button type="submit">
                <a href="mailto:meiyinghu168@gmail.com" id="email-button">
                  Mail me
                </a>
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
