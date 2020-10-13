import React from "react";
import "../Education/Education.css";

function TimeLineItem(props) {
  return (
    <div 
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDate(props.date);
        props.setActiveInfo(props.info);
      }}
      className="timeline-item1"
    > 
      <h1>{props.title}</h1>
    </div>
  );
}

export default function EducationScreen() {
  const [activeTitle, setActiveTitle] = React.useState("Education");
  const [activeDate, setActiveDate] = React.useState("Date");
  const [activeInfo, setActiveInfo] = React.useState("Information");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem 
            title="Harvard University"
            setActiveTitle={setActiveTitle}
            date="Aug 2020 - Present"
            setActiveDate={setActiveDate}
            info="•	A.B., Anticipated Concentration in Computer Science & Biomedical Engineering
            •	Presidential Science Scholarship Recipient of $200,000 from the President of South Korea
            •	Activities: Harvard Computer Society, Crimson Technology Board, Harvard Ventures, International                   Genetically Engineered Machine, Global Alliance for Medical Innovation, Harvard Financial Analyst Club
            "
            setActiveInfo={setActiveInfo}
          ></TimeLineItem>
          <TimeLineItem 
            title="Chadwick International"
            setActiveTitle={setActiveTitle}
            date="Aug 2013 - May 2020"
            setActiveDate={setActiveDate}
            info="•	International Baccalaureate Diploma GPA 45/45	 
            •	Student-Body President, Founder/Leader of 4 Councils, Varsity Tennis Co-Captain, Honor Orchestra Co-President
            •	Senior Awards: The Margaret Chadwick Award, Excellence in Science, Excellence in Mathematics,                        Excellence in Theory of Knowledge
            "
            setActiveInfo={setActiveInfo}
          ></TimeLineItem>
          <TimeLineItem 
            title="Seoul Christian School"
            setActiveTitle={setActiveTitle}
            date="Aug 2008 - May 2013"
            setActiveDate={setActiveDate}
            info="•	American-based Foreign school located in South Korea."
            setActiveInfo={setActiveInfo}
          ></TimeLineItem>
        </div>
        <div className="highlight1-background">
          <h1>{activeTitle}</h1>
          <p>{activeDate}</p>
          <h4>{activeInfo}</h4>
        </div>
      </div>
    </div>
  );
}
