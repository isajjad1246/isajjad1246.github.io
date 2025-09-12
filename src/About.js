import './App.css';
import Typewriter from './Typewriter';


function About() {
    return (
        <>
            <h1>About Me</h1>
            <p>
                <Typewriter text="I graduated from Rutgers University-New Brunswick in 2024 where I got my B.A. in Computer Science and Minor in Critical Intelligence Studies. I currently work for Bank of America in their Technology Analyst Program. I'm very passionate about making a sustainable, positive impact with technology! Outside of the work, I've also interned for Johnson and Johnson as a Data and Analytics Technology Intern. In my freetime, I like to travel (this year I've gone to four different countries) and recently started running (the goal is to eventually run a marathon... definitely not there yet)!" speed={400} />
            </p>
        </>
    );
}

export default About;
