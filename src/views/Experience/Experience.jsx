import React from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div 
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDate(props.date);
        props.setActiveInfo(props.info);
      }}
      className="timeline-item"
    > 
      <h1>{props.title}</h1>
    </div>
  );
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = React.useState("Experiences");
  const [activeDate, setActiveDate] = React.useState("Date");
  const [activeInfo, setActiveInfo] = React.useState("Info");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem 
            title="Student-body President"
            setActiveTitle={setActiveTitle}
            date="May 2019 - May 2020"
            setActiveDate={setActiveDate}
            info="•	Headed 12 student-faculty councils/meetings, focusing on promoting inclusion, student wellness, and sustainability in school. Executed academic, plastic-free, inclusion, and donation policies. 
            •	Founded Academic Council, Wellness Council, and Inclusion Council, that reduced school start hour by 30 minutes, established late study center, executed bimonthly wellness days, and redesigned multiple school facilities."
            setActiveInfo={setActiveInfo}
          ></TimeLineItem>
          <TimeLineItem 
            title="Tennis Varisty Captain"
            setActiveTitle={setActiveTitle}
            date="Aug 2018 - Dec 2019"
            setActiveDate={setActiveDate}
            info="•	  Organized/led team practices and competitions. 2017-18 KAIAC Tennis Finalist. 2018-19 KAIAC Tennis Champion. 2018-19 MVP Player."
            setActiveInfo={setActiveInfo}
          ></TimeLineItem>
          <TimeLineItem 
            title="Author"
            setActiveTitle={setActiveTitle}
            date="Nov 2016 - Sep 2019"
            setActiveDate={setActiveDate}
            info="•	  Wrote and published a 200-page interview essay/narrative on 14 inspiring figures who helped the disabled community in Korea and describes their unique approach to public service, based on 8 years of experience working as a dental assistant on Purme Foundation’s disabled dental service team."
            setActiveInfo={setActiveInfo}
          ></TimeLineItem>
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <p>{activeDate}</p>
          <h4>{activeInfo}</h4>
        </div>
      </div>
    </div>
  );
}
