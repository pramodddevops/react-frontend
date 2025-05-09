import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [demos, setDemos] = useState([]);

  useEffect(() => {
    axios
      .get('https://strapi-demo-app.azurewebsites.net/api/demos')
      .then((response) => {
        setDemos(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching demos:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Demo Application</h1>
      {demos.length > 0 ? (
        demos.map((demo) => (
          <div key={demo.id}>
            <h2>{demo.attributes.title}</h2>
            <p>{demo.attributes.description}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
