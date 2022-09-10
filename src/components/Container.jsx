import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';


export default function Container() {
    const [popular,setPopular] = useState([]);


    const fetchMovies = async() => {
        const API_KEY = '4ba8b9d749d26df0692f3a528944df1d';
        const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        const data = await fetch(URL);
        const movies = await data.json();
        setPopular(movies.results);
    }

    useEffect(() => {
        fetchMovies();
     }, []);

    return (
        <div className="App">
            <h5>Movies</h5>
            <div className="popular-movie">
                {popular.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie}></MovieCard>
                })}
            </div>
        </div>
    )
}
































/*import React, { useState, useEffect } from "react";
import Welcome from "./Welcome";

export default function Container() {
    const [name, setName] = useState('Carlos');
    const [color, setColor] = useState('red');

    useEffect(() => {
        const handleSetData = data => {
            setName(data.name);
            setColor(data.color);
        }
        // Call api
        setTimeout(() => {
            const data = { name: "Jorge", color: "pinkText" }
            handleSetData(data);
        }, 4000);
    }, []);



    return (
        <div><Welcome name={name} color={color}></Welcome></div>
    )
}*/