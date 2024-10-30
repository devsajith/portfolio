import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/sports.png";
import editor from "../../Assets/Projects/movie.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/turf.png";
import bitsOfCode from "../../Assets/Projects/job.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MicroBlog"
              description="Introducing **[App Name]** – a dynamic microblogging platform where you can share thoughts, images, and connect with friends. Built with a powerful backend in Node.js and an interactive React.js frontend, **[App Name]** brings seamless, real-time communication with Firebase-powered chat. Share small blogs, discover friends, and stay connected through engaging posts and private chats, all on a modern, responsive interface."
              ghLink="https://github.com/devsajith/microBlog"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="JOB PORTAL"
              description="Developed a feature-rich job portal with a robust Node.js backend. The platform includes core functionalities such as job searching, applying for positions, and posting job listings, providing an efficient solution for job seekers and employers alike."
              ghLink="https://github.com/devsajith/job_portal"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Movie Ticket Booking "
              description="Built with a Spring Boot backend and Angular frontend, this web app provides a seamless experience for booking movie tickets. Key features include user registration, movie listings with showtimes, interactive seat selection, and a secure payment gateway. An intuitive admin panel allows theater managers to manage movies, schedules, and seat availability. This scalable, full-featured platform combines a responsive Angular UI with a robust Spring Boot REST API, delivering real-time seat updates and efficient booking management."
              ghLink="https://github.com/devsajith/BookMyShowUser"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Play Sports"
              description="A Django-powered web app for booking turf slots, making it easy for users to view available times, reserve slots, and manage bookings. With a clean, user-friendly interface, Play Spots simplifies the process of finding and reserving turf spaces for sports and activities, creating a streamlined experience for players and turf managers alike."
              ghLink="https://github.com/devsajith/Play_Spots"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Book My Turf"
              description="**Play Spots** – A web app for booking turf slots, built with PHP. This platform allows users to easily browse available time slots, reserve turfs, and manage their bookings. The PHP backend ensures efficient handling of bookings, providing a smooth, reliable user experience. Designed for both players and turf managers, Play Spots streamlines the booking process with a straightforward, responsive interface."
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
