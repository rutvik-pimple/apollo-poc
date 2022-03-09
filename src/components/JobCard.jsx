import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function JobCard(props) {
  console.log(props.job)
  return (
    <Card sx={{ width: "30em", marginBottom:"10px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.job.company.name}
        </Typography>
        <Typography variant="h5" component="div">
          {props.job.title}
        </Typography>
        <Typography sx={{ mb: 2 }} color="text.secondary">
          {props.job.cities[0]?.country.name}
        </Typography>
        <Typography variant="body2">
          {props.job.cities[0]?.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default JobCard;