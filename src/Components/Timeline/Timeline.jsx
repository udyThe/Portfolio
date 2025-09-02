import React, { useContext, useEffect, useState } from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import StarRateIcon from "@mui/icons-material/StarRate";
import { ThemeContext } from "../../Context/Theme";

export const Timeline = () => {
  const [{ themename }] = useContext(ThemeContext);
  const [linecolor, setlinecolor] = useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <div className="section mainsection">
      <h2 className="section__title" data-aos="fade-right">
        My <span className="different">Timeline 💫</span>
      </h2>
      <VerticalTimeline lineColor={linecolor}>
        <VerticalTimelineElement
          date={"Aug 2022 - Present"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            CSE Student
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            UPES, Dehradun
          </h4>
          <p data-aos="fade-right" className="timelineDiscription">
            Currently, I am in my last year of my degree, constantly studying new technologies.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date={"June 2025 - July 2025"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            Cloud Project Intern
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            IBM, Remote
          </h4>
          <p data-aos="fade-right" className="timelineDiscription">
            Built a cloud based natural language processing project using AWS Services and Flask app.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={"June 2025 - July 2025"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            Android Developer intern
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            DigiMind Technology Services Pvt. Ltd, Bhopal(M.P.)
          </h4>
          <p data-aos="fade-right" className="timelineDiscription">
            Developed a role-based Flutter app using Clean Architecture with hybrid state management (Provider & GetX).
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={""}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            Student [B.Tech. (Computer Science)]
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            UPES University, Dehradun (Uttrakhand)
          </h4>
          <p data-aos="fade-right" className="timelineDiscription">
            Studied Computer Science with all related core subjects.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={""}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
          contentArrowStyle={{
            borderRight: "16px solid  var(--clr-primary)",
          }}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title" data-aos="fade-right">
            Student [12th (Science)]
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            data-aos="fade-right"
          >
            Birla public School, Pilani (Rajasthan)
          </h4>
          <p data-aos="fade-right" className="timelineDiscription">
            Studied Mathematics, Physics, Chemistry and Computer Science.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          icon={<StarRateIcon />}
          iconStyle={{
            border: ` 3px solid var(--clr-primary)`,
            backgroundColor: `var(--clr-bg)`,
            color: `var(--clr-primary)`,
          }}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
