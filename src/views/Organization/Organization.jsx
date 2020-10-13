import React from "react";
import "../Organization/Organization.css";

function TimeLineItem(props) {
  return (
    <div 
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDate(props.date);
        props.setActiveInfo(props.info);
      }}
      className="timeline-item2"
    > 
      <h1>{props.title}</h1>
    </div>
  );
}

export default function OrganizationScreen() {
  const [activeTitle, setActiveTitle] = React.useState("Organization");
  const [activeDate, setActiveDate] = React.useState("Date");
  const [activeInfo, setActiveInfo] = React.useState("Information");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem 
            title="Harvard Computer Society"
            setActiveTitle={setActiveTitle}
            date="Sep 2020 - Present"
            setActiveDate={setActiveDate}
            info="•	Comper"
            setActiveInfo={setActiveInfo}
          ></TimeLineItem>
          <TimeLineItem 
            title="Crimson Technology Board"
            setActiveTitle={setActiveTitle}
            date="Sep 2020 - Present"
            setActiveDate={setActiveDate}
            info="•	Comper"
            setActiveInfo={setActiveInfo}
          ></TimeLineItem>
          <TimeLineItem 
            title="Harvard Ventures"
            setActiveTitle={setActiveTitle}
            date="Sep 2020 - Present"
            setActiveDate={setActiveDate}
            info="•	Comper"
            setActiveInfo={setActiveInfo}
          ></TimeLineItem>
          <TimeLineItem 
            title="Harvard Financial Analyst Club"
            setActiveTitle={setActiveTitle}
            date="Sep 2020 - Present"
            setActiveDate={setActiveDate}
            info="•	Comper"
            setActiveInfo={setActiveInfo}
          ></TimeLineItem>
          <TimeLineItem 
            title="International Genetically Engineered Machine"
            setActiveTitle={setActiveTitle}
            date="Sep 2020 - Present"
            setActiveDate={setActiveDate}
            info="•	Comper"
            setActiveInfo={setActiveInfo}
          ></TimeLineItem>
          <TimeLineItem 
            title="Global Alliance for Medical Innovation"
            setActiveTitle={setActiveTitle}
            date="Sep 2020 - Present"
            setActiveDate={setActiveDate}
            info="•	Corneal Surface Imaging Software Team / Innovation Team"
            setActiveInfo={setActiveInfo}
          ></TimeLineItem>
          <TimeLineItem 
            title="Korean International Students Association"
            setActiveTitle={setActiveTitle}
            date="Sep 2020 - Present"
            setActiveDate={setActiveDate}
            info="•	Freshmen Representative"
            setActiveInfo={setActiveInfo}
          ></TimeLineItem>
          <TimeLineItem 
            title="Harvard Korean Association"
            setActiveTitle={setActiveTitle}
            date="Sep 2020 - Present"
            setActiveDate={setActiveDate}
            info="•	Member"
            setActiveInfo={setActiveInfo}
          ></TimeLineItem>
        </div>
        <div className="highlight2-background">
          <h1>{activeTitle}</h1>
          <p>{activeDate}</p>
          <h4>{activeInfo}</h4>
        </div>
      </div>
    </div>
  );
}
