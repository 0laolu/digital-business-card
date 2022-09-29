import React from "react"

export default function Info() {
    return (
        <div className="business-card__info">
            <img src="../images/dev-lady.png" />
            <section className="profile-info">
                <h2>Laura Smith</h2>
                <p className="title">Frontend Developer</p>
                <a href="#" className="website">olaolu.dev</a>
                
                <div className="socials-buttons">
                {/* Email button */}
                    <button className="email button">
                        <span className="btn-content">
                            <img src="../images/Mail.png"/>
                            <p className="btn-text">Email</p>
                        </span>
                    </button>
                    
                {/* Linkedin button */}
                    <button className="linkedin button">
                        <span className="btn-content">
                            <img src="../images/linkedin.png" />
                            <p className="btn-text">LinkedIn</p>
                        </span>
                    </button>
                </div>
            </section>
        </div>
    )
}