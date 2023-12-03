import "./ExperienceStyles.css";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  const experiences = [
    {
      title: "Project Engineer",
      company: "Wipro",
      date: "July 2019 - Feb 2022",
      description: "Drove impactful React development initiatives at Wipro, specializing in seamless UI creation, cross-functional collaboration, and the implementation of cutting-edge technologies for diverse projects in an Agile environment.",
    },
    {
      title: "Software Engineer",
      company: "Zensar Technologies",
      date: "Feb 2022 2018 - Present",
      description: "Led innovation and specialized in crafting dynamic React projects at Zensar, contributing to the enhancement of user experiences and shaping the digital landscape with excellence in code.",
    },
  ];
  return (
    <>
    <section id="experience">
      <h5>What Skills I Have</h5>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="icons"></BsPatchCheckFill>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icons"></BsPatchCheckFill>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icons"></BsPatchCheckFill>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icons"></BsPatchCheckFill>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="icons"></BsPatchCheckFill>
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icons"></BsPatchCheckFill>
              <div>
                <h4>Express.js</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icons"></BsPatchCheckFill>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="icons"></BsPatchCheckFill>
              <div>
                <h4>Pug</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article> */}
          </div>
        </div>
      </div>
      </section>
      <section>
     <div className="experience-section">
      <h2 className="experience-heading">Work Experience</h2>
      <div className="row">
        {experiences.map((experience, index) => (
          <div key={index} className={`col-md-6 ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}>
            <div className="experience-item">
              <h3 className="experience-title">{experience.title}</h3>
              <p className="company-date">{experience.company} | {experience.date}</p>
              <p className="description">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      </section>
      </>
  );
};

export default Experience;
