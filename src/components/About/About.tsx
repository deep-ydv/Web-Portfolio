import { Container } from "./styles";
import VinayakSingh from "../../assets/VinayakSingh.webp";
import PradeepProfile from "../../assets/pp5.png"
import python from "../../assets/python.svg"
import java from "../../assets/java.svg"
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import cppIcon from "../../assets/cpp-icon.svg"
import tailwindIcon from "../../assets/tailwind-icon.svg"

export function About() {
  return (
    <Container id="about">
       
        <div className="about-image">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.21 * 1000}>
          <img src={PradeepProfile} alt="Pradeep Yadav" width="500px"/>
        </ScrollAnimation>
        </div>
      
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInRight">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.1 * 1000}>
          <p>
          Hi, I’m Pradeep, a passionate Frontend Developer who loves building fast, scalable, and user-friendly web interfaces.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          I specialize in React, modern JavaScript, and responsive UI design that delivers seamless user experiences.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.3 * 1000}>
          <p>
          I focus on crafting clean code and visually engaging products that perform flawlessly across devices.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4> Bachelor of Technology (B.Tech)</h4>
            <p>ABES Engineering College, Ghaziabad | July 2022 - Present</p>
            <p>7.48 CGPA</p>
          </div>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
             <h3>Experience:</h3><h4>Software Developer</h4>
            <p>KIWIS AND BROWNIES IT SOLUTIONS | October 2024 - Present</p>
            <p>Bangalore, India</p>
          </div>
        </ScrollAnimation> */}

        <ScrollAnimation animateIn="fadeInRight" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div> */}
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div> */}
            <div className="hability cppIcon">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cppIcon} alt="Cpp" />
            </ScrollAnimation>
          </div>
           <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability cppIcon">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={tailwindIcon} alt="tailwind" />
            </ScrollAnimation>
          </div>
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div> */}
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={wordpress} alt="Wordpress" />
            </ScrollAnimation>
          </div> */}
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={shopify} alt="shopify" />
            </ScrollAnimation>
          </div> */}
         
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
     
    </Container>
  )
}
