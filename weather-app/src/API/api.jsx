import axios from "axios";

export const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${process.env.REACT_APP_API_KEY}`;

export const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=berlin&appid=${process.env.REACT_APP_API_KEY}`;
