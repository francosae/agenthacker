import { useState, useEffect } from "react";
import Tile from "./Tile"
import './board.css'

function Board(props){
    const [activeTile, setActiveTile] = useState('-');

    function changeGridTile(position, tile){
        let grid = gridTiles;
        grid[position.x][position.y] = 
        <Tile color="red" 
        type={'+'} 
        onSelect={onTileClick} 
        position={{
            x: position.x,
            y: position.y
        }}/>
        setGridTiles(grid);
    }
    
    var tiles = [];
    const size = 5; //for now, boards can only be 5x5

    for(let row = 0; row < size; row++){
        let tilerow = [];
        for(let column = 0; column < size; column++){
            tilerow.push(<Tile />);
        }
        tiles.push(tilerow);
    }
    //Place start
    tiles[props.start.x][props.start.y] = <Tile color='blue' type='S'/>
    
    //Place end
    tiles[props.end.x][props.end.y] = <Tile color='green' type='E'/>

    //Place inner tiles
    for(let row = 0; row < props.inner.length; row++){
        for(let column = 0; column < props.inner.length; column++){
            //Ad 1 to the row and column to inset the tiles
            tiles[row+1][column+1] = 
            <Tile color="red" 
            type={props.inner[row][column]} 
            onSelect={onTileClick} 
            position={{
                x: row+1,
                y: column+1
            }   
            }/>
        }
    }

    const [gridTiles, setGridTiles] = useState(tiles);
    //TODO: Pass info that allows the tile to be switched with another one
    function onTileClick(type, position){
        let temp = activeTile;
        console.log(`Active: ${temp}, To switch: ${type}`);
        setActiveTile(type);
        //BUG: This doesn't work. Only the active tile seems to change
        //but the type stays the same in the console log for some reason
        changeGridTile(position, temp);
    }

    return(
        <>
        Active tile: <Tile type={activeTile}/><br />
        <div className="board">
            {gridTiles}
        </div>
        </>
    )
}

export default Board