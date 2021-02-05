import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "20px",
    boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.44)"
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({props}) {
  const classes = useStyles();
  const {title, imageUrl, description, url} = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <a style={{textDecoration: "none"}} add target="_blank" rel="noopener noreferrer" href={url}>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        </a>
      </CardActionArea>
    </Card>
  );
}