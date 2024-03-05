// Cards.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cards({ image, title, content }) {
  return (
    <Card sx={{ maxWidth: 400 }} style={{ backgroundColor: '#1f2937' }}>
      <CardMedia
        sx={{ height: 100 }}
        image={image}
        title="Card Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color: 'white'}}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{color: 'white'}}>
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ backgroundColor: '#ffc432', color: 'black' }}>Share</Button>
        <Button size="small" style={{ backgroundColor: '#ffc432', color: 'black' }}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Cards;
