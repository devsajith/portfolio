import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sajithlal Santhosh  </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            I am currently working as a Full Stack Developer at Cybrox Solutions. Previously, I worked at Velonix Future Technologies and Innovature Software Labs, gaining hands-on experience in building scalable full-stack applications.


            <br />
            I hold a Bachelor of computer Application(BCA) from BPC College Piravom(Mahatma Gandhi University).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
