import { useState } from "react"
import PathTile from "./PathTile"
import TileBoard from "./TileBoard"
import puzzles from "./pathpuzzles.json"

//Tiles represent different shaped pipes
// '|' '-' '/' '\'
//They match the direction that they go

function CompletePath(){
    const [activeTile, setActiveTile] = useState('-');

    //Get a random puzzle
    const randomIndex = Math.floor(Math.random() * (puzzles.length - 1));
    const puzzle = puzzles[randomIndex];

    function switchTile(activeTile, selected){
        setActiveTile(selected);
    }

    return(
        <div className="complete-path-window">
            <h1>COMPLETE THE PATH</h1>
            Active Tile: <PathTile type={activeTile}/>
            <TileBoard size={puzzle.size} start={puzzle.start} end={puzzle.end} inner={puzzle.inner} onSelect={switchTile}/>
        </div>
    )
}

export default CompletePath