import { useState } from "react"
import Tile from "./Tile"
import Board from "./Board"
import puzzles from "./hotwire_puzzles.json"

//Tiles represent different shaped pipes
// '|' '-' '/' '\'
//They match the direction that they go

function Hotwire(){
    //Get a random puzzle
    const randomIndex = Math.floor(Math.random() * (puzzles.length - 1));
    const puzzle = puzzles[randomIndex];

    function switchTile(selected){
        setActiveTile(selected);
        console.log(selected);
    }

    return(
        <div className="complete-path-window">
            <h1>Complete the path from the blue node to the green!</h1>
            <Board size={puzzle.size} start={puzzle.start} end={puzzle.end} inner={puzzle.inner} />
        </div>
    )
}

export default Hotwire