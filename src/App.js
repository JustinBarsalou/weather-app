import React from 'react';

const api = {
  key: "2e967a06c90ff16ac5be7261e5f206db",
  baseURL: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  
  const createDate = (d) => {

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let result = `${day} ${date} ${month} ${year}`;

    return result;
  }

  return (
    <div className="App app-background">
    <main>

      <div className='search-box'>
        <input type='text' className='search-bar' placeholder='Search'/>
      </div>
      
      <div className="location-box">
        <div className='location'>Location</div>
        <div className='date'>{createDate(new Date())}</div>
      </div>

      <div className='weather-box'>
        <div className='temperature'>75º</div>
        <div className='weather-type'>Sunny</div>

      </div>

    </main>
    </div>
  );

}

export default App;
