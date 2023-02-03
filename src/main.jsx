import "./Header.css"

export default function Main(){
    return(
        <main className="main">
            <div className="personal-info">
                <h1 className="name">Sabbir Hossain</h1>
                <h3 className="occupation">Frontend Developer</h3>
                <h5 className="email">sabbirhossin.website</h5>
            </div>
            <div className="buttons">
                <button className="btn email-btn">
                <i class="uil uil-envelope-alt"></i> 
                <span>Email</span>
                </button>
                <button className="btn linkedin-btn">
                <i class="uil uil-linkedin"></i>
                <span>LinkedIN</span>
                </button>
            </div>
            <div className="about">
                <h1 className="title">About</h1>
                <h4 className="about-text">
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </h4>
            </div>
            <div className="interest">
                <h1 className="title">Interests</h1>
                <h4 className="about-text">
                Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </h4>
            </div>
        </main>
    )
}