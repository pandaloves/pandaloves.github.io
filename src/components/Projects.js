import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projects/web development projects/Blog API & Client.png";
import projImg2 from "../assets/img/projects/web development projects/Explore Sweden app.png";
import projImg3 from "../assets/img/projects/web development projects/Gym locker reserve.png";
import projImg4 from "../assets/img/projects/web development projects/To do app.png";
import projImg5 from "../assets/img/projects/web development projects/Happy coffee.png";
import projImg6 from "../assets/img/projects/web development projects/ajax, json and jQuery.png";
import projImg7 from "../assets/img/projects/ux projects/ea.png";
import projImg8 from "../assets/img/projects/ux projects/macdonalds.png";
import projImg9 from "../assets/img/projects/ux projects/presentstore.png";
import projImg10 from "../assets/img/projects/ux projects/vr game.png";
import projImg11 from "../assets/img/projects/ux projects/flixtrain.png";
import projImg12 from "../assets/img/projects/ux projects/canvas.png";
import projImg13 from "../assets/img/projects/ux projects/flixtrain.png";
import projImg14 from "../assets/img/projects/ui projects/carousel.png";
import projImg15 from "../assets/img/projects/ui projects/on-off.png";
import projImg16 from "../assets/img/projects/ui projects/onloading.png";
import projImg17 from "../assets/img/projects/ui projects/google.png";
import projImg18 from "../assets/img/projects/ui projects/safari.png";
import projImg19 from "../assets/img/projects/web development projects/svensk matsal.jpg";
import projImg20 from "../assets/img/projects/web development projects/Care about the children.png";
import projImg21 from "../assets/img/projects/web development projects/To-do-list React app.png";
import projImg22 from "../assets/img/projects/web development projects/MemoApp.png";
import projImg23 from "../assets/img/projects/web development projects/To-do-vue-app.png";
import projImg24 from "../assets/img/projects/ux projects/CSN project.png";
import projImg25 from "../assets/img/projects/web development projects/count app.png";
import projImg26 from "../assets/img/projects/web development projects/blog app.png";
import projImg27 from "../assets/img/projects/web development projects/SW people.png";
import projImg28 from "../assets/img/projects/web development projects/React to do.png";
import projImg29 from "../assets/img/projects/web development projects/alley restaurant.png";
import projImg30 from "../assets/img/projects/web development projects/FashionHub.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const firstProjects = [
    {
      title: "FashionHub",
      description:
        "With React, .NET 8, C#, REST API(token management), JavaScript, Tailwind CSS & Chakra UI",
      imgUrl: projImg30,
      websiteLink:
        "https://docs.google.com/presentation/d/1gvbCTRBtRR9mkZO_H0AOrC5aa_ZhmfrsNOATKpAiUoI/edit?usp=sharing",
    },
    {
      title: "Alley Restaurant",
      description: "With React 18, API, JavaScript & Chakra UI",
      imgUrl: projImg29,
      websiteLink: "https://alley-restaurant.netlify.app/",
    },
    {
      title: "React Todo app",
      description: "With React 18, JavaScript & Tailwind CSS",
      imgUrl: projImg28,
      websiteLink: "https://a-react-to-do-app.netlify.app/",
    },
    {
      title: "SW people",
      description: "With React 18, JavaScript, API & Material UI",
      imgUrl: projImg27,
      websiteLink: "https://sw-people.netlify.app/",
    },
    {
      title: "Blog App",
      description: "With React 18, JavaScript, API & React Bootstrap",
      imgUrl: projImg26,
      websiteLink: "https://a-blog-app.netlify.app/",
    },
    {
      title: "Count App",
      description: "With React 18 & JavaScript",
      imgUrl: projImg25,
      websiteLink: "https://react-simple-count-app.netlify.app/",
    },
    {
      title: "MemoApp",
      description:
        "With Angular 17, TypeScript, .NET 6, C#, REST API(token management)",
      imgUrl: projImg22,
      websiteLink:
        "https://docs.google.com/presentation/d/15rHfA1oiwanxa23EIJDp-ye-COP3N08KaSGIAyN4FpY/edit?usp=sharing",
    },
    {
      title: "Explore Sweden app",
      description: "With HTML, CSS & JavaScript",
      imgUrl: projImg2,
      websiteLink: "https://pandaloves.github.io/Explore-Sweden-app/",
    },
    {
      title: "Care about the Children",
      description: "With HTML, CSS & JavaScript",
      imgUrl: projImg20,
      websiteLink: "https://pandaloves.github.io/Care-about-the-Children/",
    },
    {
      title: "To-do-list App",
      description: "With React 18 & JavaScript",
      imgUrl: projImg21,
      websiteLink: "https://pandaloves.github.io/To-do-list-react-app/",
    },
    {
      title: "To-do-list App",
      description: "With Vue 3 & TypeScript",
      imgUrl: projImg23,
      websiteLink: "https://to-do-vue-app-4399c.web.app/",
    },
    {
      title: "Ajax, json and jQuery",
      description: "With JavaScript & API",
      imgUrl: projImg6,
      websiteLink: "https://pandaloves.github.io/ajax-json-and-jQuery/",
    },
    {
      title: "Blog, API and client",
      description: "With JavaScript & API",
      imgUrl: projImg1,
      websiteLink: "https://pandaloves.github.io/Blog-API---Klient-/",
    },
    {
      title: "Gym locker reserve",
      description: "With HTML, CSS & JavaScript",
      imgUrl: projImg3,
      websiteLink: "https://pandaloves.github.io/Gym-locker-reserve-app/",
    },
    {
      title: "To do app",
      description: "With HTML, CSS & JavaScript",
      imgUrl: projImg4,
      websiteLink: " https://pandaloves.github.io/To-do-app/",
    },
    {
      title: "Happy coffee",
      description: "With Figma, HTML, CSS & JavaScript",
      imgUrl: projImg5,
      websiteLink:
        "https://docs.google.com/presentation/d/188HgeOb04YkyDLs4KrKo6b6U9YoFr8eBQwTosIYU94g/edit?usp=sharing",
    },
    {
      title: "Svensk traditionell smak matsal",
      description: "With React 18 & JavaScript",
      imgUrl: projImg19,
      websiteLink:
        "https://pandaloves.github.io/Svensk-traditionell-smak-Matsal/",
    },
  ];

  const secondProjects = [
    {
      title: "EA",
      description: "With Figma",
      imgUrl: projImg7,
      websiteLink:
        "https://docs.google.com/presentation/d/12FjdTrx9lXbMbVYuepPXIwGxuqI4pBWNKfLtgtDdx2o/edit?usp=sharing",
    },
    {
      title: "Macdonald's",
      description: "With Figma, Miro and Canva",
      imgUrl: projImg8,
      websiteLink:
        "https://docs.google.com/presentation/d/1eugMLxaZJnFzIOHVTSmOH0_0shhyBbHLKcswVThXNEk/edit?usp=sharing",
    },
    {
      title: "CSN team project",
      description: "With Figma",
      imgUrl: projImg24,
      websiteLink:
        "https://docs.google.com/presentation/d/1Zq4X3FmsAfxjOc7ivrzLpbfOt5k-SsrbnP82upXWAvY/edit?usp=sharing",
    },
    {
      title: "PresentStore",
      description: "With Figma",
      imgUrl: projImg9,
      websiteLink:
        "https://docs.google.com/presentation/d/1J8dy0i6RqyVIpGPENRG2AA9st0ywt6k5zgOom057eVw/edit?usp=sharing",
    },
    {
      title: "VR game - where is the key",
      description: "With Figma and Unity",
      imgUrl: projImg10,
      websiteLink:
        "https://docs.google.com/presentation/d/18Fps3WjrjCshHUugbvPB-w24UBjNGfJsuIbPW9ONSUU/edit?usp=sharing",
    },
    {
      title: "Flix",
      description: "With Figma, Miro, Jira and WCAG 2.1",
      imgUrl: projImg11,
      websiteLink:
        "https://docs.google.com/document/d/1UBlsNif1UvdvLgmzY6fWTNP_EaipLb1iViVC-d-7hWE/edit?usp=sharing",
    },
    {
      title: "Canvas menu",
      description: "With Figma",
      imgUrl: projImg12,
      websiteLink:
        "https://www.figma.com/file/pDsG9pd578CyzUD0SDEOw2/Ett-projekt-för-lärplattformen-Canvas?type=design&node-id=0-1&mode=design&t=92bHcwMLL8UQpfI2-0",
    },
    {
      title: "Flixtrain",
      description: "With Figma and Miro",
      imgUrl: projImg13,
      websiteLink:
        "https://docs.google.com/document/d/13ZGKzdfAN47mnhut8AfD8H3mVBDSJyPdjdUzBWunrj8/edit?usp=sharing",
    },
  ];

  const thirdProjects = [
    {
      title: "A homepage with a carousel",
      description: "With Figma",
      imgUrl: projImg14,
      websiteLink:
        "https://www.figma.com/proto/chxMEagG9CISCHaE9XFNFb/A-carousel-with-sildes?type=design&node-id=1-290&t=n3TnHl1mxMbZYq80-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A290&mode=design",
    },
    {
      title: "on-off button",
      description: "With Figma",
      imgUrl: projImg15,
      websiteLink:
        "https://www.figma.com/proto/NfiStFSJskyfbSzZ7VFNVH/An-on%2Foff-button-animation?type=design&t=rJaMVKG2SIb1d3Og-1&scaling=min-zoom&page-id=0%3A1&node-id=0-308&mode=design",
    },
    {
      title: "onloading animation",
      description: "With Figma",
      imgUrl: projImg16,
      websiteLink:
        "https://www.figma.com/proto/m6nKmdxPMfZdHr4JCC7tSr/An-onloading-animation?type=design&node-id=1-311&t=MfxoqgyGTi18kJfk-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A311&mode=design",
    },
    {
      title: "Google icon",
      description: "With Spline",
      imgUrl: projImg17,
      websiteLink:
        "https://my.spline.design/googleicon-8d3f8022e88c2cd2f9e0cde17fc25a0b/",
    },
    {
      title: "Safari icon",
      description: "With Spline",
      imgUrl: projImg18,
      websiteLink:
        "https://my.spline.design/asafariicon-004d9a132bae2a432f015907e00bb3a0/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">FD</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">UX</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">UI</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {firstProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {secondProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {thirdProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
