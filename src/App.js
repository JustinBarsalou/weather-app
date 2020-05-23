import React from 'react';

const api = {
  key: "2e967a06c90ff16ac5be7261e5f206db",
  baseURL: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="App app-background">
    <main>
      <div className='search-box'>
      <input type='text' className='search-bar' placeholder='Search'/>

      </div>

    </main>
    </div>
  );

}

export default App;
