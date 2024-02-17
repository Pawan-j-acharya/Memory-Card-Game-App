import React, { useEffect, useState } from "react";
import  PropTypes  from "prop-types";
import Card from "./Card";
import './DisplayCards.css'

export default function DisplayCards({
    highscore,
    setHighScore,
    score,
    setScore,
    setDisplayResult,
    setOutcome,
    noOfCards
}){
    const [pokemonData , setPokemonData] = useState([]);
    const [trackedList , setTrackedList] =useState([]);
    const [flip , setFlip] = useState(false);
    const [isDataFetched , setDataFetched] = useState(false);

    function GetPokemon(){

        useEffect(()=> {
            async function fetchData(){

                try{
                    const responses = await Promise.all(
                        Array.from({length:30},(_,i) => 
                        fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}/`))
                    );

                    const pokemons = await Promise.all(
                        responses.map((response) => response.json())
                    );

                    setPokemonData(pokemons);
                    setDataFetched(true);
                }
                catch(error){
                    console.error('Error while fetching pokemon data',error);
                }

            }
            fetchData();
        },[]);

        return pokemonData;

    }

    
function trackPokemon(name){

    if(!trackedList.includes(name)){
        
        setTrackedList((prevData) =>{
            return [...prevData,name];
        });

        setScore((score += 1));
        randomArray = shuffleArray(randomArray);
        setFlip(true);

        setTimeout(() => {
            setFlip(false);
        },1000);

        if(score > highscore){
            setHighScore(score);
        }

        if(trackedList.length === noOfCards-1){
            setOutcome('WON');
            setDisplayResult(true);
            setTrackedList([]);
            setScore(0);
        }

    }
    else
    {
        setOutcome('LOSE');
        setDisplayResult(true);
        setTrackedList([]);
        setScore(0);
    }

}


    let randomArray = shuffleArray([...Array(noOfCards).keys()]);
    const data = GetPokemon();

    if(isDataFetched === false)
    {
        return <div>Loading...</div>;
    }

    return (
        <>
            {data.length > 0 && (
                <div className="cards-container">
                    {randomArray.map((index) => (
                        <Card 
                            key={index}
                            id={index}
                            data={data}
                            handleClick={trackPokemon}
                            flipStatus={flip}
                        />
                    ))}
                </div>
            )}

        </>
    )

}


function shuffleArray(array){

    for(let i= array.length-1 ; i > 0 ; i--){
        const j = Math.floor(Math.random()*(i+1));
        [array[i] , array[j]] = [array[j] , array[i]];
    }
    return array;
}

DisplayCards.propTypes ={
    highscore: PropTypes.number,
    setHighscore:PropTypes.func,
    score:PropTypes.number,
    setSCore:PropTypes.func,
    setDisplayResult:PropTypes.func,
    setOutcome:PropTypes.func,
    noOfCards:PropTypes.number
    
};

