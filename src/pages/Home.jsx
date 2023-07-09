import picture from '../assets/ALogo.png';
function Home(){

    return(
        <div>
            <div>
                <h1>Welcome!</h1>
                <p>
                    Hi! My name is Aaron Anderson, I'm an aspiring Software Developer from Anoka, Minnesota. 
                    I'm currently studying Computer Application Development at Minnesota State University
                    in Mankato, MN, and I'm currently looking for opportunities to gain development experience. 
                    I have worked with a variety of coding languages including Java, C++, I have recently started
                    learning Python, and I have worked the most with JavaScript using React and React Native frameworks. 
                    I also have some experience in working with SQL Database Systems and with Linux-based server systems, 
                    most recently using VPS servers being hosted by both Google Cloud Platform and Amazon Web Service.
                    <br/>
                </p>
                <h2> - Aaron Anderson</h2>
            </div>
            <div>
                <img src={picture} />
            </div>
        </div>
    )
}

export default Home;