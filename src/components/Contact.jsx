import {AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai"

const Contact = () => {
    return (
        <div>
            <footer>
                <div className="socials">
                    <a href="https://github.com/Marquel101"> <AiFillGithub size={50} /> </a>
                    <a href="https://www.instagram.com/heymarquel/"> <AiFillInstagram size={50}/> </a>
                    <a href="https://www.linkedin.com/in/marquel-sears-0b8907219/"> <AiFillLinkedin size={50}/> </a>
                </div>
                <h3>HOLLA AT ME</h3>
            </footer>
        </div>
    )
}
export default Contact