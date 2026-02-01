import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <p>Java</p>
                </div>
                 <div className="item">
                  <p>Spring Boot</p>
                </div>
                 <div className="item">
                  <p>Neon</p>
                </div>
                <div className="item">
                  <p>Koyeb</p>
                </div>
                <div className="item">
                  <p>TypeScript</p>
                </div>
                <div className="item">
                  <p>React</p>
                </div>
                <div className="item">
                  <p>Next.js</p>
                </div>
                <div className="item">
                  <p>Git</p>
                </div>
                <div className="item">
                  <p>REST API</p>
                </div>
                <div className="item">
                  <p>Material-UI</p>
                </div>
                <div className="item">
                  <p>Tailwind-CSS</p>
                </div>
                <div className="item">
                  <p>Chakra-UI</p>
                </div>
                <div className="item">
                  <p>Jira</p>
                </div>
                <div className="item">
                  <p>Figma</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
