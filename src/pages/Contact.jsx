import './Pages.css';
function Contact() {
    return (
        <div>
            <h1>Contact Info</h1>
            <div style={{ 'display': 'grid', 'width': '90vw' }}>
                <div>
                    <p>
                    <ul>
                        <h2>Direct Contact: </h2>
                        <li>Email: <a href="mailto:AaronLAnderson972@gmail.com" title="Contact Aaron Anderson via Email">AaronLAnderson972@gmail.com</a></li>
                        <li>Phone: (763) 898-6748</li>
                    </ul>
                    </p>
                </div>
                <div>
                    <p>
                    <ul>
                        <h2>Profiles: </h2>
                        <li>GitHub: <a href="https://www.github.com/SparkxE" title="Aaron Anderson's Projects on Github">github.com/SparkxE</a></li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/andersonaaronl/" title="Aaron Anderson on LinkedIn">linkedin.com/in/andersonaaronl/</a></li>
                    </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Contact;