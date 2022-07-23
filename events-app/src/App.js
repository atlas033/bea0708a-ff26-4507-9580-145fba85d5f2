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



function App() {
  const [data, setData] = useState();
  const [searchString, setSearchString] = useState('');
  const sourceUrl = "https://tlv-events-app.herokuapp.com/events/uk/london"

  fetch(sourceUrl)
  .then(response => response.json())
  .then(data => setData({ data }));

  const handleOnSearchChange = (string) => setSearchString(string);

  return (
    <div className="App">
      <Header
        onSearchChange={handleOnSearchChange}
      />

      <main>
        <h1>Public Events</h1>
        <p>{JSON.stringify(searchString)}</p>

        <p>{JSON.stringify(data)}</p>
      </main>

    </div>
  );
}

export default App;
