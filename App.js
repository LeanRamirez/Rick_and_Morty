import './App.css';
import Cards from './components/cards/Cards';

import SearchBar from './components/searchbar/SearchBar.jsx';
import characters from './data.js';




function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters}/>
      </div>
   );
}

export default App;
      

         

