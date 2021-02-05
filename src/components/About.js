import React from 'react';
import Fade from '@material-ui/core/Fade';

function About() {
    const useStyles = {
        root: {
            position: "relative",
            top: "45px",
            width: "60%",
            margin: "auto",
            textAlign: "center",
            justifyContent: 'Center',
            padding: "20px",
            height: "auto"
        },
        image: {
            height: "300px",
            width: "auto",
            border: "3px solid black",
            borderRadius: "100%"
        },
        about: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        text: {
            padding: "10px",
            fontSize: "16pt"
        }
    }

    return (
        <Fade in timeout={3000}>
            <div style={useStyles.root}>
                <h1>ABOUT</h1>
                <h4>
                    Brandon is a fullstack web developer from the Chicago suburbs, with expereince in mutliple professional fields, who enjoys learning about new tech and implenting it. Starting his career in retail management, he enjoyed the variety and fast paced direct intereactions with customers. When his son was born he decided to find a career with more traditional working hours, transitioning into the insurance field. Both of these fields are far behind when it comes to tech. Brandon was used to making old tech work, but wanted to learn more about the tech industry and developing tools to modernize these industries. After attending Fullstack Academy's 26 week web development bootcamp, Brandon is excited to join an organization that thrives in collaboration with teammates and it's clients, continues to develop it's employees and community, and  builds tech to better our lives.
                </h4>
                <div style={useStyles.about}>
                    <img style={useStyles.image} src="https://i.imgur.com/qW0WMDl.jpg" alt="brandon's family"/>
                    <p style={useStyles.text}>
                        Brandon has a very energetic toddler that keeps him busy for most of the day. 
                    </p>
                    <i style={useStyles.text} class="em em-man-woman-boy" aria-label=""></i>
                </div>
                <div style={useStyles.about}>
                    <i style={useStyles.text} class="em em-baseball" aria-label="BASEBALL"></i>
                    <p style={useStyles.text}>
                        Growing up in the Chicagoland area his whole life, Brandon and his family enjoy all of the Chicago sports teams.
                    </p>
                    <img style={useStyles.image} src="https://i.imgur.com/hkKfBKC.jpg" alt="brandon at wrigley" />
                </div>
                <div style={useStyles.about}>
                    <img style={useStyles.image} src="https://i.imgur.com/Pkjk9KB.jpg" alt="family" />
                    <p style={useStyles.text}>
                        Brandon is a part of a large family with 4 younger brothers. We love having large family events at my parents house.
                    </p>
                    <i style={useStyles.text} class="em em-house_with_garden" aria-label="HOUSE WITH GARDEN"></i>
                </div>
                <h1>RESUME</h1>
                <div>
                    <iframe style={{width: "60%", height: "1100px", margin: "auto" }} title="BrandonAlbright's Resume" src="https://docs.google.com/document/d/e/2PACX-1vTWykSnwY3Wmx9H9Q8ch5FQY5UENPFn3QjUT8F3PeQazmLmIKhhgIvF32ZfrwT6uA/pub?embedded=true"></iframe>
                </div>
            </div>
        </Fade>)
}

export default About;