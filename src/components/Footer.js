import linkedinIcon from "../images/Linkedin Icon.png"
import githubIcon from "../images/GitHub Icon.png"

function Footer() {
    return (
        <div className="soc-media">
            <a href="https://www.linkedin.com/in/karlespinosa" target="_blank"><img src={linkedinIcon} /></a>
            <a href="https://github.com/KaRob121" target="_blank"><img src={githubIcon} /></a>
        </div>
    )
}

export default Footer