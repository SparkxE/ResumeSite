import picture from '../assets/ALogo.png';
import './Pages.css';
function Home() {

    return (
        <div id='home'>
            <h1 style={{ gridColumn: '1/4', gridRow: '1/2' }}>Welcome!</h1>
            <p style={{ gridColumn: '1/3', gridRow: '2/4', marginInlineStart: '40px' }}>
                Hi! My name is Aaron Anderson, I'm an aspiring Software Developer from Anoka, Minnesota.
                I'm currently studying Computer Application Development at Minnesota State University
                in Mankato, MN, and I'm currently looking for opportunities to gain development experience.
                I have worked with a variety of coding languages including C#, C++, JavaScript, and Java. I have some 
                basic experience with Python, and I have used JavaScript mostly using React and React Native frameworks.
                I also have some experience in working with SQL Database Systems and with Linux-based server systems,
                most recently using VPS servers being hosted by both Google Cloud Platform and Amazon Web Service.
                <br />
            </p>
            <img style={{ gridColumn: '3/4', gridRow: '1/4', margin: '40px' }} src={picture} />
            <h2 style={{ gridColumn: '1/2', gridRow: '3/4', marginInlineStart: '40px' }}> - Aaron Anderson</h2>
        </div>
    )
}

export default Home;