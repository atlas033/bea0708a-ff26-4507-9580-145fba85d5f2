import './App.css';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import Header from './components/Header';
import Main from './components/Main';


function App() {
  const [data, setData] = useState();
  const [shoppingCartData, setShoppingCartData] = useState();
  const [searchString, setSearchString] = useState('');
  const [itemsInShoppingCartCount, setItemsInShoppingCartCount] = useState(0);
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  const sourceUrl = "https://tlv-events-app.herokuapp.com/events/uk/london"

  if (!data) {
    fetch(sourceUrl)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.log(error));
  }

  const handleOnSearchChange = (string) => setSearchString(string);
  const handleShoppingCartClick = () => setShowShoppingCart(!showShoppingCart);

  return (
    <div className="App">
      <Header
        onSearchChange={handleOnSearchChange}
        itemsInShoppingCartCount={itemsInShoppingCartCount}
        onShoppingCartClick={handleShoppingCartClick}
      />
      <Main
      data={data}
      shoppingCartData={shoppingCartData}
      showShoppingCart={showShoppingCart}
      />
    </div>
  );
}

export default App;
