import { useState } from 'react'

import './tile.css'

//Tile images
import tileUp from '../../assets/tile_up.png'
import tileSide from '../../assets/tile_side.png'
import tileLeftUp from '../../assets/tile_left_up.png'
import tileRightUp from '../../assets/tile_right_up.png'
import tileLeftDown from '../../assets/tile_left_down.png'
import tileRightDown from '../../assets/tile_right_down.png'
import tileBlank from '../../assets/tile_blank.png'
import tileGoal from '../../assets/tile_goal.png'

function Tile(props){
    const [type, setType] = useState(props.type); //the wire direction for the tiles
    const [tileImage, setImage] = useState();

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

    function changeType(type){
        setType(type);
        switch(type){
            case '|':
                setImage(tileUp);
                break;
            case '-':
                setImage(tileSide);
                break;
            case '<^':
                setImage(tileLeftUp);
                break;
            case '^>':
                setImage(tileRightUp);
                break;
            case '<v':
                setImage(tileLeftDown);
                break;
            case 'v>':
                setImage(tileRightDown);
                break;
            case 'S':
            case 'E':
                setImage(tileGoal);
                break;
            default:
                setImage(tileBlank);
        }
    }
    
    if(!props.type){
        return <span className='tile'></span>
    }
    if(props.type == 'S' || props.type == 'E'){
        return <span className='tile' style={
            {
                borderColor: props.color ? props.color : 'black'
            }
        }>
            <img src={image}/>
        </span>
    }
    return(
        <button className="tile" style={
            {
                borderColor: props.color ? props.color : 'black'
            }
        } onClick={(e) => {props.onSelect ? props.onSelect(type, props.position) : null}}>
            <img src={image}/>
        </button>
    )
}

export default Tile