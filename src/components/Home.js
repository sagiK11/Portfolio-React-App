import avater from "../assets/images/avatar.png"
import { projects } from "../projects/projects"

const Home = () => {
    return (
        <div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Footer />
        </div>
    )
}

export default Home

const Section1 = () => {
    return (
        <section className="section s1 is-white has-text-centered">
            <div className="container">
                <div className="column is-centerd ">
                    <h1 className="title" style={{ letterSpacing: "0.1rem" }}>Software Developer with Front-End Speciality</h1>
                    <h2 className="subtitle is-5 mt-4"><q className="quote">If you know how to make software, then you can create big things.</q></h2>
                    <figcaption className="subtitle is-5" >&mdash; Xavier Niel</figcaption>
                    <img className="avatar" src={avater} alt="sagi's avatar" />

                </div>
            </div>
        </section>

    )
}

const Section2 = () => {
    return (
        <section className="section s2 has-text-centered">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-three-fifths">
                        <h2 className="title is-spaced is-size-3-dekstop is-size-4-mobile">Hello, I'm Sagi. Thank you for jumping by!</h2>
                        <p className="subtitle is-size-5-desktop" style={{ textAlign: "justify" }}>
                            I've recently graduated from Israel's Open University with a major of Computer Science.
                            I see myself as auto-didact, which means I feel comfortable learning on my own new technologies and exploring new domains
                            which I can then use to solve problems.
                            As part of being a student of the Open University I had the privilege to manage my own studies meaning that I could
                            find the time to work on several side projects.
                            These projects that I've created serves both the global and local communities and I'd be happy to share them with you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Section3 = () => {

    return (
        <section className="section s3">
            <div className="container">
                <h1 className="title has-text-centered is-spaced is-size-3-dekstop is-size-4-mobile stack-title">My (Current) Tech Stack</h1>
                <div className="columns stack">
                    <div className="column tech-col-left">
                        <h2 className="subtitle tech-subtitle">Languages</h2>
                        <div className="content">
                            <ul>
                                <li>Java</li>
                                <li>Kotlin</li>
                                <li>C</li>
                                <li>Javascript</li>
                                <li>Postgre/SQL</li>
                                <li>Python</li>
                                <li>Dart</li>
                            </ul>
                        </div>
                    </div>
                    <div className="column tech-col-middle">
                        <h2 className="subtitle tech-subtitle">Frameworks</h2>
                        <div className="content">
                            <ul>
                                <li>React.JS</li>
                                <li>Redux</li>
                                <li>Jetpack</li>
                                <li>Flutter</li>
                                <li>JavaFX</li>
                            </ul>
                        </div>
                    </div>
                    <div className="column tech-col-middle" >
                        <h2 className="subtitle tech-subtitle">Tools</h2>
                        <div className="content">
                            <ul>
                                <li>Git</li>
                                <li>Firebase</li>
                                <li>Intellij</li>
                                <li>Android Studio</li>
                                <li>VS Code</li>
                                <li>Clion</li>
                            </ul>
                        </div>
                    </div>
                    <div className="column tech-col-right">
                        <h2 className="subtitle tech-subtitle">Environments</h2>
                        <div className="content">
                            <ul>
                                <li>Windows</li>
                                <li>Android</li>
                                <li>Linux</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
const Section4 = () => {

    return (
        <section className="section s4">
            <div className="container">
                <h1 className="title has-text-centered my-5 my-work-title">My Work</h1>
                <div className="columns is-multiline">
                    {
                        projects.map(({ title, description, image, tags, id, code, visit, time }) => (
                            <div className="column is-one-third project-box" key={id}>
                                <a href={visit} className=" project-box">
                                    <div className="box has-text-centered " >
                                        <img className="logo" src={image} alt="project-logo" />
                                        <p className="content box-description">{description}</p>
                                        <div className="columns">
                                            <div className="column is-half">
                                                <a className="box-ref" href={code}>
                                                    Code
                                                </a>
                                            </div>
                                            <div className="column is-half">
                                                <a className="box-ref" href={visit}>
                                                    Visit
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section >
    )
}


const Footer = () => {
    return (
        <div className="columns app-footer">
            <div className="column has-text-centered">
                <h1 className="title footer-title">Sagi Korzack</h1>
                <div className="footer-content">
                    <h5>Created by me @2021</h5>
                    <p> Made with React.JS & Bulma</p>
                </div>
            </div>
        </div>
    )
}


