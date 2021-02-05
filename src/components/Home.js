import React from 'react';
import Fade from '@material-ui/core/Fade';

function Home() {
    const useStyles = {
        root: {
            position: "relative",
            top: "45px",
            margin: "auto",
            justifyContent: 'space-around',
            alignItems: "center",
            padding: "5%",
            display: "flex",
            flexDirection: "row"
        },
        image: {
            width: "auto",
            height: "400px",
        }
    }

    return (
        <Fade in timeout={3000}>
            <div style={useStyles.root}>
                {/* left */}
                <div>
                    <span style={{display: "flex", flexDirection: "row"}}>
                        <i style={{fontSize: "36pt"}}class="em em-wave" aria-label="WAVING HAND SIGN"></i>
                        <h1>Hello,</h1>
                    </span>
                    <p style={{fontSize: "16pt"}}>
                        My name is Brandon Albright, a fullstack web developer in the Chicagoland area.
                    </p>
                </div>
                {/* right */}
                <img style={useStyles.image} src="https://i.imgur.com/1TXCWZ2.jpg" alt="Brandon and son"/>
            </div>
        </Fade>
        )
}

export default Home;