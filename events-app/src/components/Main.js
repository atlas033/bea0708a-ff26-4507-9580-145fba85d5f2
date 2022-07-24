import EventsContainer from "./EventsContainer";

export default function Main({events, showShoppingCart, onClickAddToShoppingCart, onClickRemoveFromShoppingCart}) {

    const uniqueDates = [...new Set(events.map(event => event.date))].sort((a, b) => new Date(a)-new Date(b))
    
    return (
        <div className="App-main">
            
            { showShoppingCart ? (<h1>Shopping Cart</h1>) : (<h1>Public Events</h1>) }
            {uniqueDates.map(date => (
            <EventsContainer
                date={date}
                events={events.filter(event => event.date === date)}
                onClickAddToShoppingCart={onClickAddToShoppingCart}
                onClickRemoveFromShoppingCart={onClickRemoveFromShoppingCart}
                showShoppingCart={showShoppingCart}
            />
            ))}
        </div>
    );
}