import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/sports.png";
import editor from "../../Assets/Projects/movie.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/turf.png";
import bitsOfCode from "../../Assets/Projects/job.png";
import ampthill from "../../Assets/Projects/ampthill.png";
import eduforge from "../../Assets/Projects/edu.png";
import college from "../../Assets/Projects/collegeEntry.png";
import poster from "../../Assets/Projects/poster.png";
import farm from "../../Assets/Projects/farm.png";
import shop from "../../Assets/Projects/shop.png";
import cybrox from "../../Assets/Projects/cybrox.png";


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
              imgPath={poster}
              isBlog={false}
              title="Poster Maker"
              description="Introducing Poster Maker, a dynamic mobile app where you can create and share eye-catching posters, designs, and visuals with ease. Built using React Native for a smooth cross-platform experience and powered by Firebase on the backend, Poster Maker delivers fast performance and real-time updates. Design posters, customize layouts, explore creative ideas, and share your creations instantly—all through a modern, intuitive, and responsive mobile interface."
              ghLink="https://github.com/devsajith"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ampthill}
              isBlog={false}
              title="Ampthill Resort"
              description="Introducing Ampthill Resort Management, a dynamic resort management platform where staff can manage bookings, services, and guest interactions seamlessly. Built with a powerful Next.js frontend and backed by Firebase, Ampthill Resort Management enables real-time data updates and smooth operations. Manage reservations, track guests, coordinate services, and stay connected through a modern, responsive interface designed for efficiency and reliability."
              ghLink="https://github.com/devsajith"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cybrox}
              isBlog={false}
              title="Cybrox"
              description="Introducing Cybrox Solution, a dynamic software company website where businesses can explore services, projects, and connect with a professional development team. Built with a powerful Next.js framework, Cybrox Solution delivers fast performance and a smooth, interactive user experience. Showcase services, highlight expertise, attract clients, and stay connected through a modern, responsive interface designed to reflect innovation and trust."
              ghLink="https://github.com/devsajith"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Shop ERP"
              description="Introducing Shop Management, a dynamic ERP website for small scale shops where owners can manage sales, inventory, and customers efficiently. Built with a powerful backend in Node.js and an interactive React.js frontend, Shop Management enables smooth, real-time operations. Track products, handle billing, monitor reports, and manage customers through a modern, responsive interface designed for daily business needs."
              ghLink="https://github.com/devsajith"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={farm}
              isBlog={false}
              title="Farm House"
              description="Introducing Farmhouse, a dynamic static website where visitors can explore the property, view amenities, and connect with the farmhouse effortlessly. Built using React for a smooth and interactive user experience, Farmhouse delivers fast performance and clean design. Showcase facilities, highlight surroundings, attract guests, and stay engaging through a modern, responsive interface tailored for visual appeal."
              ghLink="https://github.com/devsajith/farmHouse"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eduforge}
              isBlog={false}
              title="EduForge"
              description="Introducing Edu Forge, a dynamic institution management platform where administrators can manage students, staff, and academic operations efficiently. Built with a powerful backend in Node.js and an interactive Next.js frontend, Edu Forge enables seamless, real-time system workflows. Manage records, track academics, streamline processes, and stay organized through a modern, responsive interface designed for educational institutions."
              ghLink="https://github.com/devsajith"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={college}
              isBlog={false}
              title="College Management System"
              description="Introducing **College Entry Management**, a dynamic platform where colleges can manage student entry, exit, and movement securely. Built with a powerful backend in **Node.js** and an interactive **React.js** frontend, College Entry Management enables seamless, real-time tracking and approvals. Monitor entries, manage permissions, track records, and ensure safety through a modern, responsive interface designed for campus operations.
"
              ghLink="https://github.com/devsajith"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MicroBlog"
              description="Introducing Microblog a dynamic microblogging platform where you can share thoughts, images, and connect with friends. Built with a powerful backend in Node.js and an interactive React.js frontend, **MICROBLOGGING** brings seamless, real-time communication with Firebase-powered chat. Share small blogs, discover friends, and stay connected through engaging posts and private chats, all on a modern, responsive interface."
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
