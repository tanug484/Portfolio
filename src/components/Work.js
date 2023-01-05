import React from "react";
import WorkCard from "./WorkCard";
import "./WorkCardStyles.css";
import ProjectCardData from "./WorkCardData";
import { BsFileX } from "react-icons/bs";
const Work = () => {
  return (
    <>
      <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {ProjectCardData.map((val, index) => {
            return (
              <WorkCard
                key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
              ></WorkCard>
            );
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "center",animationFillMode:'both',animationDuration:'1260ms',animationDelay:'0ms',animationIterationCount:'1',opacity:'1'}}>
          <a className="btn"  href="https://github.com/tanug484" style={{width:'fit-content'}} target="_blank">
            More Projects
          </a>
        </div>
      </div>
    </>
  );
};

export default Work;
