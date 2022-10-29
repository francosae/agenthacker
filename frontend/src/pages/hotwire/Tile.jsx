import { useState } from 'react'

import './tile.css'

const imagePath = "../../assets/"
//Tile images
import tileUp from `${imagePath}tile_up.png`
import tileSide from `${imagePath}tile_side.png`
import tileLeftUp from `${imagePath}tile_left_up.png`
import tileRightUp from `${imagePath}tile_right_up.png`
import tileLeftDown from `${imagePath}tile_left_down.png`
import tileRightDown from `${imagePath}tile_right_down.png`
import tileBlank from `${imagePath}tile_blank.png`
import tileGoal from `${imagePath}tile_goal.png`

function Tile(props){
    const [type, setType] = useState(props.type); //the wire direction for the tiles

    var image;
    //Maybe an enum would be better
    switch(props.type){
        case '|':
            image = tileUp;
            break;
        case '-':
            image = tileSide;
            break;
        case '<^':
            image = tileLeftUp;
            break;
        case '^>':
            image = tileRightUp;
            break;
        case '<v':
            image = tileLeftDown;
            break;
        case 'v>':
            image = tileRightDown;
            break;
        case 'S':
        case 'E':
            image = tileGoal;
            break;
        default:
            image = tileBlank;
    }

    return(
        <button className="tile" style={
            {
                borderColor: props.color ? props.color : 'black'
            }
        //props.onSelect should pass data to the board, which passes it to
        //the game component so it can switch this tile with the active tile
        } onClick = {(e) => props.onSelect ? props.onSelect(type) : null}>
            <img src={image}/>
        </button>
    )
}

export default Tile