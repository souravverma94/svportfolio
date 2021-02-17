import React from "react";
import { Tabs, Tab } from "react-materialize";
import ProjectCard from "./ProjectCard";
import randomQuoteGif from "./images/random-quote.gif";
import markdownPreviewer from "./images/MarkDownPreviewer.gif";
import css12 from "./images/css12.gif";
import css84 from "./images/css84.gif";
import insta from "./images/insta.gif";
import worm from "./images/worm.gif";
import card from "./images/card.gif";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="catagory-tabs">
      <Tabs className="projectTabs">
        <Tab title="Web Projects">
          <div class="tabrow">
            <div class="tabcol">
              <ProjectCard
                desc={"Random Quote Generator"}
                actionlinks={[
                  {
                    name: "Codepen",
                    link: "https://codepen.io/vermazz/pen/MWjBNqr",
                  },
                ]}
                imgsrc={randomQuoteGif}
              />
            </div>
            <div class="tabcol">
              <ProjectCard
                desc={"React Facebook Clone"}
                actionlinks={[
                  {
                    name: "Github",
                    link:
                      "https://github.com/souravverma94/react-facebook-replica",
                  },
                ]}
              />
            </div>
            <div class="tabcol">
              <ProjectCard
                desc={"React Instagram Clone"}
                actionlinks={[
                  {
                    name: "Github",
                    link:
                      "https://github.com/souravverma94/react-instagram-clone",
                  },
                  {
                    name: "Demo",
                    link: "http://react-insta-frontend.herokuapp.com/explore",
                  },
                ]}
                imgsrc={insta}
              />
            </div>
          </div>
          <div class="tabrow">
            <div class="tabcol">
              <ProjectCard
                desc={"React Markdown Previewer"}
                actionlinks={[
                  {
                    name: "Codepen",
                    link: "https://codepen.io/vermazz/pen/KKgjxXq",
                  },
                ]}
                imgsrc={markdownPreviewer}
              />
            </div>
            <div class="tabcol">
              <ProjectCard
                desc={"CSS Challenge Pen #12"}
                imgsrc={css12}
                actionlinks={[
                  {
                    name: "Codepen",
                    link: "https://codepen.io/vermazz/pen/oNzaZKV",
                  },
                ]}
              />
            </div>
            <div class="tabcol">
              <ProjectCard
                desc={"CSS Challenge Pen #84"}
                imgsrc={css84}
                actionlinks={[
                  {
                    name: "Codepen",
                    link: "https://codepen.io/vermazz/pen/bGwPJEV",
                  },
                ]}
              />
            </div>
          </div>
        </Tab>
        <Tab title="Machine Learning">
          <div class="tabrow">
            <div class="tabcol">
              <ProjectCard
                desc={"Worms Activity Tracker using MATLAB"}
                actionlinks={[
                  {
                    name: "Github",
                    link: "https://github.com/souravverma94/worm_activity_ml",
                  },
                ]}
                imgsrc={worm}
              />
            </div>
            <div class="tabcol">
              <ProjectCard
                desc={"Playing Card Rank & Suite Detector"}
                actionlinks={[
                  {
                    name: "Github",
                    link:
                      "https://github.com/souravverma94/card_rank_suit_detector",
                  },
                  {
                    name: "Demo",
                    link:
                      "https://github.com/souravverma94/card_rank_suit_detector/blob/main/Demo.gif",
                  },
                ]}
                imgsrc={card}
              />
            </div>
            <div class="tabcol">
              <ProjectCard
                desc={"Image Classifier to Identify Dog Breeds"}
                actionlinks={[
                  {
                    name: "Github",
                    link:
                      "https://github.com/souravverma94/Dog-Breed-Classifier-python",
                  },
                ]}
                imgsrc={"https://cutt.ly/Kjb0NfC"}
              />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Projects;
