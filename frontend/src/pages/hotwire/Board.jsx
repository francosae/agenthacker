import { useState } from "react";
import PathTile from "./Tile"
import './board.css'

function Board(props){
    const [selected, setSelected] = useState('NONE');
    const size = 5; //for now, boards can only be 5x5
    var tiles = [];
    for(let row = 0; row < size; row++){
        let tilerow = [];
        for(let column = 0; column < size; column++){
            tilerow.push(<PathTile />);
        }
        tiles.push(tilerow);
    }
    //Place start
    tiles[props.start.x][props.start.y] = <PathTile color='blue' type='S'/>
    
    //Place end
    tiles[props.end.x][props.end.y] = <PathTile color='green' type='E'/>

    //Place inner tiles
    for(let row = 0; row < props.inner.length; row++){
        for(let column = 0; column < props.inner.length; column++){
            tiles[row+1][column+1] = <PathTile color="red" type={props.inner[row][column]} onSelect={onTileClick}/>
        }
    }

    //Todo: Pass info that allows the tile to be switched with another one
    function onTileClick(tileData){
        props.onSelect(tileData);
    }

    return(
        <div className="tile-board">
            {tiles}
        </div>
    )
}

export default Board