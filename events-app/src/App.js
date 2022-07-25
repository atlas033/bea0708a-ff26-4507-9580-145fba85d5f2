import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import React from 'react';


function App({ fdata }) {
  const [data, setData] = useState(parseData(fdata));
  const [eventIDs, setEventIDs] = useState(data.map(event => event._id));
  const [shoppingCartEventIDs, setShoppingCartEventIDs] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [itemsInShoppingCartCount, setItemsInShoppingCartCount] = useState(0);
  const [showShoppingCart, setShowShoppingCart] = useState(false);

  const handleOnSearchChange = (string) => setSearchString(string);
  const handleShoppingCartClick = () => setShowShoppingCart(!showShoppingCart);
  const filteredEvents = () => data.filter(event => containsEvent(eventIDs, event)).filter(event => event.title.toLowerCase().includes(searchString.toLowerCase()));
  const eventsInShoppingCart = () => data.filter(event => containsEvent(shoppingCartEventIDs, event));
  const handleOnClickAddToShoppingCart = (event) => { 
    setItemsInShoppingCartCount(itemsInShoppingCartCount + 1); 
    setShoppingCartEventIDs([...shoppingCartEventIDs, event._id]);
    setEventIDs(eventIDs.filter(id => id !== event._id));
   };
  const handleOnClickRemoveFromShoppingCart = (event) => {
    setItemsInShoppingCartCount(itemsInShoppingCartCount - 1);
    setShoppingCartEventIDs(shoppingCartEventIDs.filter(id => id !== event._id));
    setEventIDs([...eventIDs, event._id]);
  };



  return (
    <div className="App">
      <Header
        onSearchChange={handleOnSearchChange}
        itemsInShoppingCartCount={itemsInShoppingCartCount}
        onShoppingCartClick={handleShoppingCartClick}
        showShoppingCart={showShoppingCart}
      />
      <Main
      events={showShoppingCart ? eventsInShoppingCart() : filteredEvents()}// && altParseData(data).sort((a, b) => new Date(a)-new Date(b))}
      showShoppingCart={showShoppingCart}
      onClickAddToShoppingCart={handleOnClickAddToShoppingCart}
      onClickRemoveFromShoppingCart={handleOnClickRemoveFromShoppingCart}
      />
    </div>
  );
}

export default App;

function containsEvent(eventIDs, event) {
  return eventIDs.indexOf(event._id) !== -1;
}

function parseData(data) {
  return [... (data.map(event => ({
    _id: event._id,
    title: event.title,
    date: event.date,
    flyerFront: event.flyerFront,
    startTime: event.startTime,
    endTime: event.endTime,
    city: event.city,
    venue: event.venue,
  }))) ];
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
    //   const eventIDs = data.filter(event => event.date === date);
    //   return [...
    //      {[date]: 
    //       eventIDs.map(event => [... {"title": event.title, "flyerFront": event.flyerFront, }]) }];
    //     }
    // )
    // }