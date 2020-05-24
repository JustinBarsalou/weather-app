import React, { useState }from 'react';

const api = {
  key: "2e967a06c90ff16ac5be7261e5f206db",
  baseURL: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  // search function
  const search = evt => {
    // whatever is in the search bar is put into query upon enter
    if (evt.key === "Enter") {
      // putting together the api call 
      fetch(`${api.baseURL}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          // reset the query when all is done
          setQuery('');
          // console.log(result);
        });
    }
  }
  
  // function to create a date
  const createDate = (d) => {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let date = d.getDate();
    let day = days[d.getDay()];
    let year = d.getFullYear();
    let month = months[d.getMonth()];
    // concatenate values 
    let result = `${day} ${date} ${month} ${year}`;

    return result;
  }


  return (
    <div className="App app-background">
    <main>
      <div className='title'>
        Weather App
      </div>

      <div className='search-box'>
        <input 
        type='text' 
        className='search-bar' 
        placeholder='Search' 
        onChange={e => setQuery(e.target.value)} 
        value={query} 
        onKeyPress={search}/>
      </div>

      {/* if the weather has not been determined yet */}
      {(typeof weather.main != "undefined") ? (
        <div> 
          <div className="location-box">
            <div className='location'>{weather.name}, {weather.sys.country}</div>
            <div className='date'>{createDate(new Date())}</div>
          </div>

          <div className='weather-box'>
            {/* had to convert to standard instead of metric  */}
            <div className='temperature'>{Math.round((weather.main.temp) * 1.8 + 32)}°F</div>
            <div className='weather-type'>{weather.weather[0].main}</div>
          </div>
        </div>
        // else nothing 
        ) : ('')}
    </main>
    </div>
  );

}

export default App;









/////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { Component } from 'react';
// import fire from './config/fire.js'
// import Weather from './components/main'
// import Login from './components/login'
// import Router from './Router'
// import { BrowserRouter } from 'react-router-dom'


// //app component
// class App extends Component{
//   constructor() {
//     super();
//     this.state = ({
//       user: {},
//     });
//   }

//   componentDidMount() {
//     this.authListener();
//   }

//   authListener() {
//     fire.auth().onAuthStateChanged((user) => {
//       console.log(user);
//       if (user) {
//         this.setState({ user });
//         localStorage.setItem('user', user.uid);
//       } else {
//         this.setState({ user: null });
//         localStorage.removeItem('user');
//       }
//     });
//   }

//   render() {
//     return (
//       <div>

//       {this.state.user ? ( <Login/>) : (<Weather />)}
//       </div>
//         // <BrowserRouter>
//           // <Login></Login>
//           // {/* <Weather></Weather> */}
  
//           // {/* the router contents consist of the paths and componenets */}
//           // {/* not in use yet  */}
//           // <Router />
//         // </BrowserRouter>
//     );
//   }

//   }
// export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////



























// ////////////////////////////////////////////////////////////////
// import React, { useState }from 'react';
// import {Helmet} from "react-helmet";
// import ScriptTag from 'react-script-tag';
// import {login} from './functions.js'


// const api = {
//   key: "2e967a06c90ff16ac5be7261e5f206db",
//   baseURL: "https://api.openweathermap.org/data/2.5/"
// }



// function App() {
//   const [query, setQuery] = useState('');
//   const [weather, setWeather] = useState({});
  

  
//   // search function 
//   const search = evt => {
//     // whatever is in the search bar is put into query upon enter
//     if (evt.key === "Enter") {
//       // putting together the api call 
//       fetch(`${api.baseURL}weather?q=${query}&units=metric&APPID=${api.key}`)
//       .then(res => res.json())
//       .then(result => {
//         setWeather(result);
//         // reset the query when all is done
//         setQuery('');
//         // console.log(result);
//       });
//     }
//   }
  
//   // function to create a date
//   const createDate = (d) => {
    
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
//     let date = d.getDate();
//     let day = days[d.getDay()];
//     let year = d.getFullYear();
//     let month = months[d.getMonth()];
//     // concatenate values 
//     let result = `${day} ${date} ${month} ${year}`;
    
//     return result;
//   }
  
  
  
  
  
//   return (
// <html>

// <head>
// {/* <script src="/functionsjs" type="text/javascript"></script>  */}


//     <title>Weather</title>
//     <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet"/>
//     <link rel="stylesheet" href="style.css" />


// </head>

//   <body>

//     <div className="MainBody">


//         {/* Login Page */}
//       <div id="login_div" className="main-div">
//         <h3>Weather App Login</h3>
//         <input type="email" placeholder="Email..." id="email_field" />
//         <input type="password" placeholder="Password..." id="password_field" />

//         <button onClick={login()}>Login to Account</button>

//       </div>




//         {/* Weather App  */}
//       <div id="user_div" className="loggedin-div">
//         <div className="App app-background">
//           <main>
//             <div className='title'>
//               Weather App
//             </div>

//             <div className='search-box'>
//               <input 
//               type='text' 
//               className='search-bar' 
//               placeholder='Search' 
//               onChange={e => setQuery(e.target.value)} 
//               value={query} 
//               onKeyPress={search}/>
//             </div>

//             {/* if the weather has not been determined yet */}
//             {(typeof weather.main != "undefined") ? (
//               <div> 
//                 <div className="location-box">
//                   <div className='location'>{weather.name}, {weather.sys.country}</div>
//                   <div className='date'>{createDate(new Date())}</div>
//                 </div>

//                 <div className='weather-box'>
//                   {/* had to convert to standard instead of metric  */}
//                   <div className='temperature'>{Math.round((weather.main.temp) * 1.8 + 32)}°F</div>
//                   <div className='weather-type'>{weather.weather[0].main}</div>
//                 </div>
//               </div>
//               // else nothing 
//               ) : ('')}
//           </main>
//           </div>
//       </div>

//     </div>




//   </body>

// </html>
//   );

// }

// export default App;

////////////////////////////////////////////