import PathTile from "./PathTile"
import './tile-board.css'

function TileBoard(props){
    const size = 5; //for now, boards can only b 5x5
    var tiles = [];
    for(let row = 0; row < size; row++){
        let tilerow = [];
        for(let column = 0; column < size; column++){
            tilerow.push(<PathTile />);
        }
        tiles.push(tilerow);
    }
    //Place start
    console.log("Start: (" + props.start.x + "," + props.start.y + ")");
    tiles[props.start.x][props.start.y] = <PathTile color='blue' type='S'/>
    
    //Place end
    tiles[props.end.x][props.end.y] = <PathTile color='green' type='E'/>

    //Place inner tiles
    for(let row = 0; row < props.inner.length; row++){
        for(let column = 0; column < props.inner.length; column++){
            tiles[row+1][column+1] = <PathTile color="red" type={props.inner[row][column]} onSelect={onTileClick}/>
        }
    }

    return(
        <div className="tile-board">
            {tiles}
        </div>
    )
}

function onTileClick(tileData){
    console.log(tileData);
}

export default TileBoard