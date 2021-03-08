import React, {Component} from 'react';
//import logo from './logo.svg';
import {CardList} from './components/card-list-component/cardList.component.jsx';
import './App.css';
import {SearchBox} from './components/search-box/search.component.jsx'

class App extends Component{
  constructor(){
    super();
    this.state ={
      monsters:[],
      searchfield:""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>this.setState({monsters:users}));
  }

  render(){
    const {monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
      )
    return (
         <div className='App'>
         <h1>
         Monsters Rolodex
         </h1>
         <SearchBox 
         placeholder='search monsters'
         handleChange={(e)=>this.setState({searchfield:e.target.value})}
         />
         <CardList monsters={filteredMonsters}> </CardList>         
         </div>
        );
  }
}












// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           I AM SUBHADEEP
//         </p>
        
//       </header>
//     </div>
//   );
// }

export default App;
