import React, {useEffect, useState} from "react";
import {Section, Animation } from 'gatsby-theme-portfolio-minimal';

const Education = () => {
  const data = [
      {
          school: "Lagos State University",
          degree: "BS.C, Computer Science",
          grade: "CGPA - 3.86",
          duration:"September 2018 - Jun 2023",
          highlights: [
            "Software Engineering",
            "Operating Systems",
            "Data Structure and Algorithms",
            "Object Oriented Programming",
            "Artificial Intelligence",
            "Discrete Mathematics",
            "Human-Computer Interface",
            "Database Management Systems"
        ]
      },
      {
        school: "Google Africa Developer Training 2022",
        degree: "Associate Android Developer Scholarship",
        grade: "Skill IQ - 182",
        duration:"June 2022 – September 2022",
        highlights: [
            "Background Jobs with Work Manager",
            "Kotlin Coroutines",
            "Android Architecture Components",
            "Working with Android Tools and Testing",
            "Managing Lifecycle and Viewmodel Data",
            "Notification and App Widgets"
      ],
    },
    {
      school: "Google Africa Developer Training 2021",
      degree: "Associate Android Developer Scholarship",
      grade: "Skill IQ - 147",
      duration:"June 2021 – October 2021",
      highlights: [
          "Introduction to Kotlin",
          "Android Navigation Components",
          "Firebase UI",
          "Android Room Foundamentals",
          "Customizing Styles and Themes",
          "Material Design"
    ],
  }
  ]
  const [active, setActive] = useState(data[0].school);

  const activeCompany = data.find((item) => item.school === active);

  return(
    <div id="education" className="lyt snap-start min-h-screen">
    <Section sectionId="education" heading="Education">
        <Animation type="fadeUp">
          <div className="flex justify-center gap-3">
              <div className="flex flex-col">
                  {data.map((item, index) => (
                      <div key={index} className={`text-hero-tagline max-w-fit border-l-2 px-4 py-1.5 ${active === item.school? "bg-[#FFDF00] bg-opacity-10 text-[#FFDF00] border-[#FFDF00]": "border-opacity-75 opacity-75"}`} onClick={()=> setActive(item.school)}>{item.school}</div>
                  ))}
              </div>
              <div className="flex flex-col gap-0 flex-grow">
                  <h1 className="text-hero-tagline">{activeCompany?.degree} <span className="text-[#FFDF00]">{activeCompany?.grade}</span></h1>
                  <p className="font-light">{activeCompany?.duration}</p>
                  <p className="font-bold">Relevant Coursework</p>
                  <ul className="list-disc list-inside">
                      {activeCompany?.highlights.map((item, index) => (
                          <li key={index} className="font-light relative">{item}</li>
                      ))}
                  </ul>
              </div>
          </div>
        </Animation>
    </Section>
    </div>
  );
};

export default Education;