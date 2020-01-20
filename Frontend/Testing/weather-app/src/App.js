import React, {useEffect, useState} from 'react';
import { getWeather } from './api';
import { Citylabel } from './components/cityLabel';
import { TempLabel } from './components/conditionLabel';
import { CityInputField } from './components/cityInputField';
import './App.css';

const App = () => {
  const [city, setCity] = useState('toronto');
  const [cityInputField, setCityInputField] = useState('');
  const [temp, setTemp] = useState();
  const [weatherCondition, setWeatherCondition] = useState();


  return (
    <div className="App">

    </div>
  );
}

export default App;
