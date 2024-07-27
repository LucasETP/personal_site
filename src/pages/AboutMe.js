// AboutMe.js
import React from 'react';
import myPic from '/Users/lucas/WebstormProjects/personal_site/src/LucasPic.png'

function AboutMe() {
    return (
        <div className="main-content" style={{ textAlign: 'center' }}>
            <img src={myPic} width={250} height={250} alt="Lucas' Face" />
            <h2>About Me</h2>
            <p style={{ marginLeft: '500px', marginRight: '500px', textAlign: 'justify'}}>
                I am Lucas Rabenstein-Bolufer, a third-year student at Northeastern University majoring in computer
                science with a concentration in artificial intelligence. My professional aspiration lies in software
                development.
            </p>
            <p style={{ marginLeft: '500px', marginRight: '500px', textAlign: 'justify'}}>
                During a co-op placement at Wayfair LLC, I gained valuable experience as a software engineer on the
                'FinTech - Cost Allocation and Credits' team. This opportunity exposed me to essential aspects of
                professional programming, including version control and agile methodology. My responsibilities
                involved transitioning from a monolithic codebase to a microservice architecture, enhancing REST API
                endpoints, and optimizing SQL databases to prevent data loss. Additionally, I collaborated with
                international teams leveraging our team's APIs, to resolve their issues.
            </p>
            <p style={{ marginLeft: '500px', marginRight: '500px', textAlign: 'justify'}}>
                In the future, I aim to embark on a career within startup environments, where I
                can refine my skills and gain substantial professional exposure. Ultimately, I aspire to venture into
                solo development, potentially with a startup venture of my own. My enthusiasm for integrating
                mathematics and computer science drives me to rethink traditional teaching methodologies, with a keen
                interest in introducing programming at an earlier educational stage.
            </p>
            <p style={{ marginLeft: '500px', marginRight: '500px', textAlign: 'justify'}}>
                Beyond academia, I engage in various activities, including soccer, skateboarding,
                weightlifting, and running, as part of my commitment to personal growth. In professional collaborations,
                I prioritize creating an inclusive environment where all voices are heard and valued.
            </p>
            <p style={{ marginLeft: '500px', marginRight: '500px', textAlign: 'justify'}}>
                As a software developer, I recognize the significance of my code's impact, ranging from the
                functionality of everyday devices to shaping digital content consumption. It is my mission to leave a
                lasting legacy of writing meticulous and purpose-driven code that contributes positively to society.
                Moreover, in light of the ethical considerations posed by advancements in artificial intelligence, I
                advocate for responsible programming practices that prioritize societal well-being.
            </p>
        </div>
    );
}

export default AboutMe;
