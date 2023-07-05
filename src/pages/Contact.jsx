function Contact(){
    return(
        <div>
            <h1>Contact Info</h1>
            <div style={{'display':'grid', 'width':'90vw'}}>
                <p>
                    <h2>Direct Contact: </h2>
                    <ul>
                        <li>Email: <a href="mailto:AaronLAnderson972@gmail.com" title="Contact Aaron Anderson via Email">AaronLAnderson972@gmail.com</a></li>
                        <li>Phone: (763) 898-6748</li>
                    </ul>
                </p>
                <p>
                    <h2>Profiles: </h2>
                    <ul>
                        <li>GitHub: <a href="github.com/SparkxE" title="Aaron Anderson's Projects on Github">github.com/SparkxE</a></li>
                        <li>LinkedIn: <a href="linkedin.com/in/andersonaaronl/" title="Aaron Anderson on LinkedIn">linkedin.com/in/andersonaaronl/</a></li>
                    </ul>
                </p>
            </div>
        </div>
    )
}
export default Contact;