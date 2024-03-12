import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
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
                  <p>HTML</p>
                </div>
                <div className="item">
                  <p>CSS</p>
                </div>
                <div className="item">
                  <p>JavaScript</p>
                </div>
                <div className="item">
                  <p>TypeScript</p>
                </div>
                <div className="item">
                  <p>React</p>
                </div>
                <div className="item">
                  <p>Angular</p>
                </div>
                <div className="item">
                  <p>Vue</p>
                </div>
                <div className="item">
                  <p>Git</p>
                </div>
                <div className="item">
                  <p>Github</p>
                </div>
                <div className="item">
                  <p>API</p>
                </div>
                <div className="item">
                  <p>Bootstrap</p>
                </div>
                <div className="item">
                  <p>React-Bootstrap</p>
                </div>
                <div className="item">
                  <p>Tailwind-CSS</p>
                </div>
                <div className="item">
                  <p>Chakra-UI</p>
                </div>
                <div className="item">
                  <p>Material-UI</p>
                </div>
                <div className="item">
                  <p>Netlify</p>
                </div>
                <div className="item">
                  <p>Firebase</p>
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
