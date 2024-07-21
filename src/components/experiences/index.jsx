import React, {useEffect, useState} from "react";
import {Section, Animation } from 'gatsby-theme-portfolio-minimal';

const Experiences = () => {
    const data = [
        {
            company: "Osun State University",
            role: "Laboratory Practical Assistant",
            roleType: "Full-Time",
            duration:"August 2023 – Till date",
            highlights: [
                "Facilitated weekly hands-on practical sessions for over 1000 students in Data Structure & Algorithm, Java, Python, and C language.",
                "Collaborated with lecturers and students on practical programming language concepts, resulting in a more profound comprehension of the subject matter"
            ],
        },
        {
            company: "Freelance",
            role: "Android Developer",
            roleType: "Full-Time",
            duration:"October 2022 – Till date",
        },
        {
            company: "Arkounting Business Concepts",
            role: "Android Developer",
            roleType: "Internship",
            duration:"January 2022 – October 2022",
            highlights: [
                "Revamped an Android application for making loan requests and repayments using Kotlin and Paystack Api boosting app launch and interaction speed by over 50%",
                "Elevated app performance and user experience by applying MVVM architecture guidelines and Kotlin coroutines, leading to a 20% increase in scalability and notable improvements in code readability",
                "Setup a helpdesk software to improve customer service experience by up to 66%"
            ],
        }
    ]
    const [active, setActive] = useState(data[0].company);

    const activeCompany = data.find((item) => item.company === active);

    return(
        <div id="experiences" className="lyt snap-start min-h-screen">
        <Section sectionId="experiences" heading="Experiences">
            <Animation type="fadeUp">
                <div className=" flex justify-center gap-3">
                    <div className="flex flex-col">
                        {data.map((item, index) => (
                            <div key={index} className={`text-hero-tagline max-w-fit border-l-2 px-4 py-1.5 ${active === item.company? "bg-[#009ADA] bg-opacity-10 text-[#009ADA] border-[#009ADA]": "border-opacity-75 opacity-75"}`} onClick={()=> setActive(item.company)}>{item.company}</div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-0 flex-grow">
                        <h1 className="text-hero-tagline">{activeCompany?.role} <span className="text-[#009ADA]">{activeCompany?.roleType}</span></h1>
                        <p className="font-light">{activeCompany?.duration}</p>
                        <ul className="list-disc list-inside">
                            {activeCompany?.highlights.map((item, index) => (
                                <li key={index} className="font-light mb-2.5 relative">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
          </Animation>
        </Section>
        </div>
    );
};

export default Experiences;