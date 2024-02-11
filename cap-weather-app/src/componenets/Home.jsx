import React from 'react';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Weather App!</h2>

      <p>
        This app allows you to check the weather conditions for different cities. You can view the
        current weather, temperature, and other relevant information.
      </p>

      <h3>Types of Weather</h3>
      <p>
        Explore photos of different types of weather below. 
        Once you get the info of the get request to populate on the dom in Weather jsx.
        and stowed in Records with delete option. than find pics to put into the home page.
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <div>
          <h4>Sunny</h4>
          {/* Attach a photo or placeholder for sunny weather */}
          <img src="sunny.jpg" alt="Sunny Weather" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>

        <div>
          <h4>Rainy</h4>
          {/* Attach a photo or placeholder for rainy weather */}
          <img src="rainy.jpg" alt="Rainy Weather" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>

        <div>
          <h4>Snowy</h4>
          {/* Attach a photo or placeholder for snowy weather */}
          <img src="snowy.jpg" alt="Snowy Weather" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
