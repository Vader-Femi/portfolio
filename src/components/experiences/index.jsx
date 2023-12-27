import React, {useEffect, useState} from "react";
import {Section, Animation } from 'gatsby-theme-portfolio-minimal';

const Experiences = () => {
    const data = [
        {
            company: "Arkounting Business Concepts",
            role: "Android Developer",
            roleType: "Internship",
            duration:"January 2022 – October 2022",
            highlights: [
                "Improved an Android application for making loan requests and repayments using Paystack Api with over 2x the speed of the company’s previous app",
                "Introduced the Model-View-ViewModel (MVVM) architecture and Kotlin coroutines across the codebase improving the performance, user experience, scalability, and code readability of the Android app",
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