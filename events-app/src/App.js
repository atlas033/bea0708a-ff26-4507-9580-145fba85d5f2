import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import React from 'react';


function App({ fetchedData }) {
  const [events, setEvents] = useState(parseData(fetchedData));
  const [shoppingCartEvents, setShoppingCartEvents] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [itemsInShoppingCartCount, setItemsInShoppingCartCount] = useState(0);
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const handleOnSearchChange = (string) => setSearchString(string);
  const handleShoppingCartClick = () => setShowShoppingCart(!showShoppingCart);
  const filteredEvents = () => events.filter(event => event.title.toLowerCase().includes(searchString.toLowerCase()));
  // const eventsInShoppingCart = () => fetchedData.filter(event => shoppingCartEvents.map(id => event._id === id));
  const handleOnClickAddToShoppingCart = (event) => { 
    setItemsInShoppingCartCount(itemsInShoppingCartCount + 1); 
    setShoppingCartEvents([...shoppingCartEvents, event]);
    setEvents(events.filter(e => e._id !== event._id));
   };
  const handleOnClickRemoveFromShoppingCart = (event) => {
    setItemsInShoppingCartCount(itemsInShoppingCartCount - 1);
    setShoppingCartEvents(shoppingCartEvents.filter(id => id !== event._id));
    setEvents([...events, event]);
  };



  return (
    <div className="App">
      <Header
        onSearchChange={handleOnSearchChange}
        itemsInShoppingCartCount={itemsInShoppingCartCount}
        onShoppingCartClick={handleShoppingCartClick}
      />
      
      <Main
      events={showShoppingCart ? shoppingCartEvents : filteredEvents()}// && altParseData(data).sort((a, b) => new Date(a)-new Date(b))}
      showShoppingCart={showShoppingCart}
      onClickAddToShoppingCart={handleOnClickAddToShoppingCart}
      onClickRemoveFromShoppingCart={handleOnClickRemoveFromShoppingCart}
      />
    </div>
  );
}

export default App;

function parseData(data) {
  return data.map(event => ([...{
    _id: event._id,
    title: event.title,
    date: new Date(event.date),
    flyerFront: event.flyerFront,
    startTime: event.startTime,
    endTime: event.endTime,
    city: event.city,
    venue: event.venue,
  }]));
}


// function parseData(data) {
//   let dataOrderedByDate;

//   // let uniqueDates = [];
//   // data.map(entity => {
//   //   if (!uniqueDates.includes(entity.date)) 
//   //   {uniqueDates.push(entity.date)}
//   // })

//   let uniqueDates = [...new Set(data.map(event => event.date))];

//   return uniqueDates
  
//   // data.map(event => {
//   //   if(dataOrderedByDate.includes(event.date)) {
//   //     dataOrderedByDate.push({event.date: 
//   //       {
//   //         id: event.id,
//   //       title: event.title,
//   //       }
//   //     })});

      

//   //   return {
//   //     )
//   //     id: event.id,
//   //     title: event.title,
//   //     date: event.date,
//   //     description: event.description,
//   //     image: event.image,
//   //     price: event.price,
//   //     location: event.location,
//   //     isInShoppingCart: false
//   //   }
//   // }
//   // )
// } 
 // const parseData = (data) => {
  //   const uniqueDates = [...new Set(data.map(event => event.date))]
  //   .sort((a, b) => new Date(a)-new Date(b))
    
  //   let output = [];
  //   output.push(uniqueDates.map(date => 
  //     {
  //       const temp = data.filter(event => event.date === date)
  //       return [... {[date]: temp},]
  //     }
  //     )); 
  //   return output;

    // return uniqueDates.map(date => {
    //   return 


    // .map(date => {
    //   const events = data.filter(event => event.date === date);
    //   return [...
    //      {[date]: 
    //       events.map(event => [... {"title": event.title, "flyerFront": event.flyerFront, }]) }];
    //     }
    // )
    // }