import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { WeatherProvider } from './context/WeatherContext.jsx'
import Home from './componenets/Home.jsx'
import Weather from './componenets/Weather.jsx'
import Record from './componenets/Record.jsx'

export default function App() {
  return (
    <Router>
      <WeatherProvider>
        <nav
          style={{
            display: 'flex',
            width: '100vw',
            justifyContent: 'space-around',
         }} >

          <Link to="/"element={<Home/>} style={{ padding: 5 }}>
            Home
          </Link>
          <Link to="/weather" element={<Weather/>} style={{ padding: 5 }}>
            Weather
          </Link>
          <Link to="/record" element={<Record/>} style={{ padding: 5 }}>
            Record
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/record" element={<Record />} />
        </Routes>
      </WeatherProvider>
    </Router>
  );
}
