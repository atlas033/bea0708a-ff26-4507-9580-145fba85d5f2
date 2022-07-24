import { Grid, IconButton, Link, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';


export default function EventsContainer({date, events, onClickAddToShoppingCart, onClickRemoveFromShoppingCart, showShoppingCart}) {

    return (
        <>
            <h5>{date}</h5>
            <Grid container spacing={2}>
                {events.map(event => (
                    <Grid item xs={12} sm={6} md={4} key={event._id}>
                        {showShoppingCart ? 
                        (<EventCard
                            event={event}
                            onClickRemoveFromShoppingCart={onClickRemoveFromShoppingCart}                            
                            />) :
                        (<EventCard
                            event={event}
                            onClickAddToShoppingCart={onClickAddToShoppingCart}
                        />)}
                        </Grid>
                ))}
            </Grid>
        </>
    );  
}


function EventCard({event, onClickAddToShoppingCart, onClickRemoveFromShoppingCart}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={event.title}
        />
        <CardMedia
          component="img"
          height="194"
          image={event.flyerFront}
        />
        <CardContent className="EventCard-cardcontent">
            <Link target="_blank" href={event.venue.direction }>
                <Typography variant="body2" color="textSecondary" component="p">{event.venue.name}</Typography>
            </Link>
            <Typography variant="body2" color="textSecondary" component="p">Starts: {event.startTime}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">Ends: {event.endTime}</Typography>
            
            <div className="EventCard-cardcontent-buttons">
            {onClickAddToShoppingCart && 
            <IconButton aria-label="add to shopping cart" onClick={() => onClickAddToShoppingCart(event)}><AddShoppingCartIcon/></IconButton>}
            {onClickRemoveFromShoppingCart &&
            <IconButton color="error" aria-label="remove from shopping cart" onClick={() => onClickRemoveFromShoppingCart(event)}><RemoveShoppingCartOutlinedIcon/></IconButton>}
            </div>
            </CardContent>
        </Card>    
        );
};
    