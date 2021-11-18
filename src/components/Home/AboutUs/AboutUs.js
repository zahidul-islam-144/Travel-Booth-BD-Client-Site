import React from "react";
import "./AboutUs.css";
import { Col, Container, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <>
      <Container id="about-us" className="about-us m-3">
        <Row>
          <Col>
            <h2 className="mt-5 title">
              Travel Booth BD - The Bangladesh Travel Guide
            </h2>

            <div>
              <p>
                <span>Bangladesh</span> is one of the few countries in South
                Asia, which remains to be explored. Bangladesh has a delicate
                and distinctive attraction of its own to offer and it is
                definitely not a tourist haunt like Nepal or India. Bangladesh
                is like a painter's dream come true with a rich tapestry of
                colors and texture. The traditional emphasis of the tourist
                trade has always been on the material facilities offered by a
                country rather than on its actual charms. This may be a reason
                why Bangladesh has seldom been highlighted in the World's
                tourist maps.
                <br />
                <br />
                <span>It's a land of enormous beauty,</span> hundreds of
                serpentine rivers, crystal clear water lakes surrounded by ever
                green hills, luxuriant tropical rain forests, beautiful cascades
                of green tea gardens, world's largest mangrove forest preserved
                as World Heritage, home of the Royal Bengal Tiger and the wild
                lives, warbling of birds in green trees, wind in the paddy
                fields, abundance of sunshine, world's longest natural sea
                beach, rich cultural heritage, relics of ancient Buddhist
                civilizations and colorful tribal lives, - Bangladesh creates an
                unforgettable impression of a land of peace.
                <br />
                <br />
                <span>You'll appreciate our culture</span> and the environment.
                These are not simply sight-seeing excursions, but real-time
                learning experiences. Enjoy an ideal blend of adventure and
                exploration with comfort and relaxation. Here you find that you
                are not alone. With us, any place in Bangladesh is a home away
                from home.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
