import { Link } from "react-router-dom";
import CVPage from "../assets/components/Career";


const CareerPage = () => {
    return (
        <>
            <main>
                <div className="row">
                    <h1>
                        <span className="span-margin">
                            <span>Everything important in my career,</span>
                            <span>Trailblazing the digital frontier! </span>
                        </span>
                        <div className="stripe" />
                    </h1>
                    <CVPage />
                    <div className="stripe-special" />
                </div>
            </main>
        </>
    )
}

export default CareerPage
