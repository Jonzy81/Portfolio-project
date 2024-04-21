import { Link } from "react-router-dom";
import JonnyImageKeb from "../assets/images/imageJonnyKeb.jpg";

const HomePage = () => {
    return (
        <>
            <main>
                <div className="img-container">
                    <img
                        src={JonnyImageKeb}
                        className="first-image"
                        alt="Jonny owerlooking a walley"
                    />
                </div>
            </main>
        </>
    )
}

export default HomePage
