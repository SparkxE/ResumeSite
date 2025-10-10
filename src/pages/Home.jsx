import picture from '../assets/ALogo.png';
import './Pages.css';
function Home() {

    return (
        <div id='home'>
            <h1>Welcome!</h1>
            <p>
                Hi! My name is Aaron Anderson, and this is a webpage that acts as a digital copy of my resume. 
                I built this webpage myself using React.js and the Vite framework as a way of demonstrating my practical knowledge
                with front-end development. If you're an employer who's looking for a new software developer, please feel free 
                to check out the other pages to know more about me and see whether I'd be a good fit for the position!
                I also have my contact information listed on its own page for easy reference with links to my LinkedIn and GitHub
                profiles, as well as a link for my email. 
                <br />
                <br /> 
                Thanks for visiting!
            </p>
            <img src={picture} />
            <h2> - Aaron Anderson</h2>
        </div>
    )
}

export default Home;