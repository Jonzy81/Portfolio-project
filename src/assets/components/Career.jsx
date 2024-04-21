import React from "react";
import careerData from '../Json/Career.json';

export default function CVPage() {
    const { education, work_experience } = careerData;

    return (
        <div className="cv-content">
            <article className="edu">
                <h2>Education</h2>
                {education.map((item, index) => (
                    <div key={index}>
                        <div className="stripe"></div>
                        <section className="table">
                            <a href={item.link} className="title">{item.name}</a>
                            <p className="date">{item.date}</p>
                        </section>
                        <section className="table-content">
                            <p>{item.description}</p>
                        </section>
                    </div>
                ))}
            </article>

            <article className="work">
                <h2>Work Experience</h2>
                {work_experience.map((item, index) => (
                    <div key={index}>
                        <div className="stripe"></div>
                        <section className="table">
                            <a href={item.link} className="title">{item.name}</a>
                            <p className="date">{item.date}</p>
                        </section>
                        <section className="table-content">
                            <p>{item.description}</p>
                        </section>
                    </div>
                ))}
            </article>
        </div>
    );
}

