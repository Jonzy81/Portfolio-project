import { Link } from "react-router-dom";
import jonnyImage from "../assets/images/Jonny_skåne.jpeg";

const AboutPage = () => {
    return (
        <>

            <main>
                <div className="row">
                    <h1>
                        <span className="span-margin">
                            <span>Paving the Path to Professional Renewal,</span>
                            <span>a new start, In the digital world! </span>
                        </span>
                        <div className="stripe" />
                    </h1>
                    <div className="image-text-about">
                        <p className="interview">
                            I come from stockholm, and been fortunate to be nurtured in an
                            environment filled with art, music, and creativity. This has shaped my
                            personal development in life, leading me to always strive for passion.
                            I am driven by my curiosity and motivation to seek new knowledge; for
                            this reason, I set my sights on new challenges and embarked on my new
                            adventure. After 20 years in the construction industry as an
                            electrician, I have today begun my new journey as a full-stack
                            developer specializing in .NET. My goal is to continue my development
                            in a digital world, where my skills, strengths, and above all, my
                            knowledge from past experiences, will come in handy. A digital world
                            where I can think outside the box and grow alongside the challenges it
                            presents.
                        </p>
                        <img
                            src={jonnyImage}
                            className="about-image"
                            alt="jonny picture with white backgound ower blue skye"
                        />
                    </div>
                </div>
                <article className="container">
                    <h2>
                        My skills <span className="animate-dot">.</span>
                        <span className="animate-dot">.</span>
                        <span className="animate-dot">.</span>
                    </h2>
                    <div className="flex-container">
                        <article className="container-studies">
                            <h3>01.</h3>
                            <div className="stripe" />
                            <h4>backend.</h4>
                            <p>
                                With focus on the .NET framework, particularly C#, proficient in
                                Azure, SQL, MySQL, NoSQL and ASP.NET. I've developed a variety of
                                custom APIs, reflecting a commitment to innovative digital
                                solutions.
                            </p>
                        </article>
                        <article className="container-studies">
                            <h3>02.</h3>
                            <div className="stripe" />
                            <h4>frontend.</h4>
                            <p>
                                Experienced with JavaScript, HTML, CSS, SCSS, React, Astro, and
                                NodeJS. I build scalable applications that fit seamlessly with
                                design, emphasizing innovation and user-centric UX/UI design.
                            </p>
                        </article>
                        <article className="container-studies">
                            <h3>03.</h3>
                            <div className="stripe" />
                            <h4>full package.</h4>
                            <p>
                                From concept to implementation, I deliver complete websites that
                                stand out. With a keen eye for design and robust development skills,
                                I craft exceptional projects that leave a lasting impression.
                            </p>
                        </article>
                    </div>
                    <div className="stripe" />
                </article>
            </main>

        </>

    )
}

export default AboutPage
