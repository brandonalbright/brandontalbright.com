import React, {useState} from  "react";
import { Link } from "react-router-dom";
import Fade from '@material-ui/core/Fade';

function Header() {
    const [underline, setUnderline] = useState(1)

    const useStyles = {
        root: {
            background: "#44a",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: 'space-between',
            paddingTop: "5px",
            paddingRight: "10px",
            paddingBottom: "5px",
            paddingLeft: "10px",
            height: "40px",
            zIndex: 1000
        },
        text: {
            color: "white",
            textDecoration: "none",
            fontSize: "26pt"
        },
        nav: {
            width: "500px",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: 'space-between',
            color: "white",
        },
        underline: {
            background: "#696BBB",
            border: "1px solid #696BBB",
            borderRadius: "5px",
            padding: "5px",
            boxShadow: "inset 5px 5px 15px 5px rgba(0,0,0,0.32)"
        }

    }

    return (
        <Fade in timeout={1000}>
            <div style={useStyles.root}>
                <h1 style={useStyles.text}>Brandon Albright</h1>
                <div style={useStyles.nav}>
                    <Link to="/" 
                        style={useStyles.text}
                        onClick={() => setUnderline(1)}>
                        <h6 style={underline === 1? useStyles.underline : null} >Home</h6>
                    </Link>
                    <Link to="/about" 
                        style={useStyles.text}
                        onClick={() => setUnderline(2)}>
                        <h6 style={underline === 2? useStyles.underline : null}>About</h6>
                    </Link>
                    <Link to="/portfolio" 
                        style={useStyles.text}
                        onClick={() => setUnderline(3)}>
                        <h6 style={underline === 3? useStyles.underline : null}>Portfolio</h6>
                    </Link>
                </div>
            </div>
        </Fade>
        )
}

export default Header

