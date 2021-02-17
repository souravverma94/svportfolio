import React from "react";
import { Card, CardTitle, Icon } from "react-materialize";

const defaultProps = {
  desc: { title: "React Project #", subtitle: "React | HTML | CSS" },
  imgsrc:
    "https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg",
  actionlinks: [{ name: "Github", link: "#" }],
};

const ProjectCard = ({ desc, imgsrc, actionlinks }) => {
  return (
    <Card
      className="projCard"
      actions={actionlinks.map((x, idx) => (
        <a
          className="action-link"
          key={idx}
          href={x.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {x.name}
        </a>
      ))}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={imgsrc} />}
      revealIcon={<Icon>more_vert</Icon>}
    >
      {desc}
    </Card>
  );
};

ProjectCard.defaultProps = defaultProps;
export default ProjectCard;
