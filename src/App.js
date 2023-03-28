import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Person from './components/Person/Person';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
     {/* <LoadCountries></LoadCountries> */}
     <Header></Header>
     <Country></Country>
     <Person></Person>
    </div>
  );
}

// function LoadCountries (){
//   const [countries,setCountries] = useState([]);
//   useEffect(()=>{
//     fetch (`https://restcountries.com/v3.1/all`)
//     .then(res =>res.json())
//     .then(data => setCountries(data))
//   },[])
//   return (
//     <div>
//       <h2>Hello , Dude ....You can visit any country in the world</h2>
//       <h3>Available countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name ={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }
// function Country (props){
//   return (
//     <div>
//       <h2>Name : {props.name}</h2>
//       <p>Population : {props.population}</p>
//     </div>
//   )
// }
export default App;
