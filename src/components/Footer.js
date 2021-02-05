import React from  "react";
import Fade from '@material-ui/core/Fade';

function Footer() {
    const useStyles = {
        root: {
            background: "#44a",
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: 'space-around',
            padding: "10px",
            height: "30px"
        },
        text: {
            color: "white",
            textDecoration: "none",
            fontSize: "26pt"
        },
        nav: {
            height: "30px",
            width: "auto",
            color: "white",
        }

    }

    return (
        <Fade in timeout={1000}>
            <div style={useStyles.root}>
                <div >
                    <h1 style={useStyles.text}><i class="material-icons">call</i>847-650-6098</h1>
                </div>
                <div>
                    <a style={{textDecoration: "none"}}href="mailto:brandon4692@gmail.com">
                        <h1 style={useStyles.text}><i class="material-icons">email</i>Brandon4692@gmail.com</h1>
                    </a>
                </div>
                    <a add target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/brandonthomasalbright/">
                        <img style={useStyles.nav} src="https://i.imgur.com/ADarVZu.png" alt="linkedin" />
                    </a>
                    <a add target="_blank" rel="noopener noreferrer" href="https://github.com/brandonalbright">
                        <img style={useStyles.nav} src="https://i.imgur.com/lHQoZFv.png" alt="github" />
                    </a>
            </div>
        </Fade>
        )
}

export default Footer