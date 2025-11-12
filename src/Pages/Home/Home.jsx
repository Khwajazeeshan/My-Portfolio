import React, { useEffect, useState } from "react";
import About from "../../components/About/About";
import Resume from "../../components/Resume/Resume";
import Projects from "../../components/Project/Project";
import Contact from "../../components/Contact/Contact";
import "./Home.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Chatbot from "../chatbot/chatbot";

const Home = ({ sections }) => {
    const [visibleSections, setVisibleSections] = useState([]);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => setIsChatOpen(!isChatOpen);

    useEffect(() => {
        const sectionsOrder = ["About", "Resume", "Projects", "Contact"];
        sectionsOrder.forEach((section, index) => {
            setTimeout(() => {
                setVisibleSections((prev) => [...prev, section]);
            }, index * 700);
        });
    }, []);

    return (
        <div className="container">
            {visibleSections.includes("About") && <About ref={sections.about} />}
            {visibleSections.includes("Resume") && <Resume ref={sections.resume} />}
            {visibleSections.includes("Projects") && <Projects ref={sections.projects} />}
            {visibleSections.includes("Contact") && <Contact ref={sections.contact} />}

            {/* Chatbot Component */}
            <Chatbot open={isChatOpen} onToggle={toggleChat} />
        </div>
    );
};

export default Home;
