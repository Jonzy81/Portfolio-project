import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { initContactAnimation } from "../assets/components/contactAnimation";

const ContactPage = () => {
    useEffect(() => {
        initContactAnimation();
    }, []);
    return (
        <>
            <main>
                <article className="background-animation">
                    <span>NOW!</span>
                    <span>Get</span>
                    <span>In</span>
                    <span>Touch</span>
                </article>
            </main>
        </>
    )
}

export default ContactPage
