import React from 'react'
import Navbar from './Navbar'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="black-body d-flex justify-content-center align-items-center content-body text-center content-body">
                <div className="container flex-fill mt-5">
                    <h1 className="bold about-header mt-5 black-body whiteish">about</h1>

                    <h5 className="black-body whiteish">
                        This project was built with
                        <a className="custom-link" href="https://reactjs.org/"> React</a>,
                        <a className="custom-link" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"> Bootstrap 5</a>,
                        <a className="custom-link" href="https://developer.spotify.com/documentation/web-api/"> the Spotify Web API </a> and
                        designed in
                        <a className="custom-link" href="https://www.figma.com/design/"> Figma</a>.
                        It's also hosted with
                        <a className="custom-link" href="https://vercel.com/"> Vercel </a> and you can check out the full code on GitHub
                        <a className="custom-link" href="https://github.com/dunleavyjack/Spotify-Mood-Ring"> here</a>.
                    </h5>

                    <h1 className="bold about-header mt-5 black-body whiteish">privacy</h1>
                    <h5 className="mb-5 black-body whiteish">The complete Spotify privacy policy can be viewed here <a className="custom-link" href="https://www.spotify.com/us/legal/privacy-policy/">here</a>, which also covers approved third-party projects like this one. </h5>

                    <h1 className="bold about-header mt-5 black-body whiteish">mood detecting</h1>
                    <h5 className="black-body whiteish">Your mood is determined based on different analytics (tempo, energy, acousticness, etc.) from each song. An average is found from your recent music which is compared with the levels of an 'average listener'. That data is matched with one of over thirty moods and that's what you see. <br /><br /> Moods are, of course, strange and ineffable. But hopefully it connected with you :)</h5>
                </div>
            </div>
        </div>
    )
}

export default About;