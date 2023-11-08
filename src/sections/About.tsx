import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hi! My name is Kelvin, I am passionate about building efficient
            softwares. Ever since I created my first mock website in 2017, I've wanted to become a software developer capable of building complete
            applications from start to finish. Specializing in one aspect of the
            web wasn’t enough for me. Don’t get me wrong; there’s nothing wrong
            with specialization. It’s just that I had a passion for building
            softwares from end to end.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing and developing
            high-quality solutions that delight our clients and exceed their
            expectations at ThinkPeople Limited
            {/* <Link href="https://rapidops.com" className="link" target="_blank">
              Rapidops.
            </Link> */}
          </p>

          <p className="about-grid-info-text">
            Additionally, I share my knowledge and passion with the world by
            being a web development instructor, I have love talking about the
            web and javascript. Find out more on my{" "}
            <Link
              className="link"
              target="_blank"
              href="https://www.linkedin.com/in/olamilekan-obisesan-5287441b9/"
            >
              LinkedIn
            </Link>
          </p>
          <p className="about-grid-info-text">
            I am currently building efficient softwares for ThinkPeople Limited and
            working on my first personal Saas&nbsp;
            <Link
              className="link"
              target="_blank"
              href="https://ease-azure.vercel.app/"
            >
              Ease
            </Link>
            &nbsp;aimed at giving students ease in reading their pdfs.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">CSS/SCSS</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Zucstand</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Express.js</li>
            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">Prisma</li>
            <li className="about-grid-info-list-item">Firebase</li>
            <li className="about-grid-info-list-item">Tailwind</li>
            <li className="about-grid-info-list-item">Sanity.io</li>
            <li className="about-grid-info-list-item">Git/Github</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/olami.jpg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
