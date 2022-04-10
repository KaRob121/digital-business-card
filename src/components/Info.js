import mail from "../images/Mail.png"

function Info() {
    return (
        <div className="info">
            <img src="" width="50px"/>
            <h1>Karl Espinosa</h1>
            <p>Web Developer | Software Engineer</p>
            <button>
                <img src={mail}/>
                <a href="mailto:karlrobin_espinosa@yahoo.com">Email</a>
            </button>
        </div>
    )
}

export default Info