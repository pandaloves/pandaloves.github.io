import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projects/web development projects/Sushi app.png";
import projImg3 from "../assets/img/projects/web development projects/FashionHub.png";
import projImg4 from "../assets/img/projects/web development projects/teaShop.png";
import projImg5 from "../assets/img/projects/web development projects/MemoApp.png";
import projImg6 from "../assets/img/projects/web development projects/alley restaurant.png";
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
import projImg24 from "../assets/img/projects/ux projects/CSN project.png";
import projImg34 from "../assets/img/projects/ui projects/EA.png";
import projImg35 from "../assets/img/projects/ui projects/PresentStore.png";
import projImg36 from "../assets/img/projects/ui projects/McDonald’s.png";
import projImg37 from "../assets/img/projects/ui projects/sushi.png";
import projImg38 from "../assets/img/projects/web development projects/hitract.png";
import projImg39 from "../assets/img/projects/web development projects/dice game.png";
import projImg40 from "../assets/img/projects/web development projects/administration app.png";
import projImg41 from "../assets/img/projects/web development projects/chat room.png";
import projImg42 from "../assets/img/projects/web development projects/Social app.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const firstProjects = [
     {
      title: "Social app",
      description:
      "A fullstack project with Java, Spring Boot, Neon, Koyeb, Next.js and TypeScript",
      imgUrl: projImg42,
      websiteLink: "https://social-application-fullstack.netlify.app",
    },
     {
      title: "Chat room",
      description:
      "A fullstack project with Java, Spring Boot, Web Socket, MySQL, Next.js and TypeScript",
      imgUrl: projImg41,
      websiteLink: "https://github.com/pandaloves/chat",
    },
     {
      title: "Administration App",
      description:
      "A fullstack project with Next.js, TypeScript, Material UI, Java and Spring Boot",
      imgUrl: projImg40,
      websiteLink: "https://github.com/pandaloves/administration-backend",
    },
     {
      title: "Dice App",
      description:
      "A fullstack project with Next.js, TypeScript, Material UI, Java and Spring Boot",
      imgUrl: projImg39,
      websiteLink: "https://github.com/pandaloves/dice-app",
    },

     {
      title: "Hitract projects",
      description:
      "What I created during my internship at Hitract AB with Next.js, TypeScript and Material UI",
      imgUrl: projImg38,
      websiteLink: "https://www.youtube.com/watch?v=PKYEE5UovJ0",
    },
    {
      title: "Sushi App",
      description:
      "With Next.js, TypeScript and Material UI",
      imgUrl: projImg1,
      websiteLink: "https://sushi-order-app.netlify.app",
    },
    {
      title: "FashionHub",
      description:
        "With React, JavaScript, Tailwind CSS and Chakra UI",
      imgUrl: projImg3,
      websiteLink: "https://fashionhub-app.netlify.app",
    },
    {
      title: "MemoApp",
      description: "Fullstack with Angular 18, .NET 8, REST API(token management) & Azure",
      imgUrl: projImg5,
      websiteLink: "https://new-memo.netlify.app",
    },
    {
      title: "Alley Restaurant",
      description: "Frontend with React, API, JavaScript & Chakra UI",
      imgUrl: projImg6,
      websiteLink: "https://alley-restaurant.netlify.app/",
    },
  ];

  const secondProjects = [
    {
      title: "Sushi App",
      description:
      "With .NET and C#",
      imgUrl: projImg1,
      websiteLink: "https://github.com/pandaloves/sushiOrderAPI",
    },
    {
      title: "FashionHub",
      description:
        "With .NET and C#",
      imgUrl: projImg3,
      websiteLink: "https://github.com/pandaloves/fashionAPI",
    },
    {
      title: "Tea Shop (Team project)",
      description:
        "With Node.js and Express",
      imgUrl: projImg4,
      websiteLink: "https://github.com/pandaloves/tea-api",
    },
    {
      title: "MemoApp",
      description: "With .NET and C#",
      imgUrl: projImg5,
      websiteLink: "https://github.com/pandaloves/crud-dotnet-api",
    },
  ];

  const thirdProjects = [
     {
      title: "Sushi App",
      description: "With Figma",
      imgUrl: projImg1,
      websiteLink:
        "https://docs.google.com/document/d/1JsjvxcYflhbaCFhBBEtq-ONR69-jvn15Pz0GnlX2tVw/edit?tab=t.0#heading=h.xqrnvg506jf",
    },
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

  const fourthProjects = [
    {
      title: "Sushi",
      description: "With Figma",
      imgUrl: projImg37,
      websiteLink:
        "https://www.figma.com/proto/clh01LjUl0sGqE8C5nb8Dv/hi-fi-on-smaller-screens?node-id=18-602&p=f&t=JJ8qzR17Xd4BawJU-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    },
    {
      title: "McDonald’s",
      description: "With Figma",
      imgUrl: projImg36,
      websiteLink:
        "https://www.figma.com/proto/4aLpPvpemVhAe3I4NJiLnV/Hi-fi-prototyp-2-Efter-omdesignen?node-id=1-2&starting-point-node-id=1%3A2&t=IIbJmbGOwl44tMA4-1",
    },
    {
      title: "EA",
      description: "With Figma",
      imgUrl: projImg34,
      websiteLink:
        "https://www.figma.com/proto/pV388r5hrwpHJLATuzlIHM/project-3-hi-fi-prototype?node-id=1-206&starting-point-node-id=1%3A206&t=0vM7L1u14kRVj9oT-1",
    },
    {
      title: "PresentStore",
      description: "With Figma",
      imgUrl: projImg35,
      websiteLink:
        "https://www.figma.com/proto/Tf159KQQ4VQ37Mlrg32SIQ/Project-1-Hi-fi-prototype?node-id=1-228&starting-point-node-id=1%3A228&t=ggEybApQZxjtDbev-1",
    },
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
                        <Nav.Link eventKey="second">BD</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">UX</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">UI</Nav.Link>
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
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {fourthProjects.map((project, index) => {
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