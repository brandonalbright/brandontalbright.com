import React from 'react';
import MediaCard from "./Projects";
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';

function Portfolio() {
    const useStyles = {
        root: {
            position: "relative",
            top: "45px",
            left: 0,
            right: 0,
            textAlign: "center",
            justifyContent: 'center',
            padding: "5px",
            
        },
        projects: {
            margin: "auto",
            width: "50%",
            paddingBottom: "300px"
        }
    }

    const Projects = [
        {
            title: "Mango Record Store", 
            imageUrl: "https://i.imgur.com/e56GbrE.png",
            description: "Fullstack Group Project: React, PostSQL, Express",
            url: "https://mangorecordshop.herokuapp.com/"
        },
        {
            title: "Fitness Tracker", 
            imageUrl: "https://i.imgur.com/A72rW6Q.png",
            description: "Front-end Group Project: React",
            url: "https://optimistic-hawking-b5d461.netlify.app"
        },
        {
            title: "Whac-A-Alien", 
            imageUrl: "https://i.imgur.com/pWWa9ma.png",
            description: "Individual Javascript Game",
            url: "https://stoic-archimedes-0d2595.netlify.app"
        },
        {
            title: "Search the Harvard Art Collection", 
            imageUrl: "https://i.imgur.com/wKLrP14.png",
            description: "Individual Javascript Game",
            url: "https://unruffled-colden-27daba.netlify.app"
        },
        {
            title: "Calculator", 
            imageUrl: "https://i.imgur.com/Ov4sdsn.png",
            description: "Individual Javascript Application",
            url: "https://nostalgic-mayer-6ef2fd.netlify.app"
        },
        {
            title: "Qwirty Store", 
            imageUrl: "https://i.imgur.com/TWxRpoT.png",
            description: "Individual Front-end Mockup: Javascript",
            url: "https://elastic-raman-8b0cb5.netlify.app"
        },
        {
            title: "Retro Draw", 
            imageUrl: "https://i.imgur.com/HgJ7HcE.png",
            description: "Individual Javascript Game",
            url: "https://keen-curran-925bef.netlify.app"
        },
    ]

    return (
        <Fade in timeout={3000}>
            <div style={useStyles.root}>
                <h1>Portfolio</h1>
                <div style={useStyles.projects}>
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                        {Projects.map((project, index) => {
                            return <MediaCard props={project} index={index} />
                        })}
                    </Grid>
                </div>
            </div>
        </Fade>
        )
}

export default Portfolio;