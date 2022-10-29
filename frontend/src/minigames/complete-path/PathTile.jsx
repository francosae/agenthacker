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

function PathTile(props){
    var tile;
    switch(props.type){
        case '|':
            tile = tileUp;
            break;
        case '-':
            tile = tileSide;
            break;
        case '<^':
            tile = tileLeftUp;
            break;
        case '^>':
            tile = tileRightUp;
            break;
        case '<v':
            tile = tileLeftDown;
            break;
        case 'v>':
            tile = tileRightDown;
            break;
        case 'S':
        case 'E':
            tile = tileGoal;
            break;
        default:
            tile = tileBlank;
    }

    return(
        <button className="tile" style={
            {
                borderColor: props.color ? props.color : 'black'
            }
        } onClick = {(e) => props.onSelect ? props.onSelect(tile) : null}>
            <img src={tile}/>
        </button>
    )
}

export default PathTile