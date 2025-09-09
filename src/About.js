import './App.css';
import Typewriter from './Typewriter';


function About() {
    return (
        <>
            <h1>About Me</h1>
            <p>
                <Typewriter text="I graduated from Rutgers University-New Brunswick in 2024 where I got my B.A. in Computer Science and Minor in Critical Intelligence Studies. I currently work for Bank of America in their Technology Analyst Program. Outside of the bank, I've also interned for Johnson and Johnson as a Data and Analytics Technology Intern." speed={100} />
            </p>
        </>
    );
}

export default About;
