import { useState } from 'react'
import puzzles from './letterpuzzles.json'

function LetterCypher() {
    const [answer, setAnswer] = useState(""); //the player's answer

    //Get a random puzzle
    const randomIndex = Math.floor(Math.random() * (puzzles.length - 1));
    const puzzle = puzzles[randomIndex];

    return (
        <div className="letter-cypher-window">
            <h1>Find the encoded string in the following message:</h1>
            <h1>{puzzle.message}</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                alert(answer.toUpperCase() == puzzle.hidden ? "YOU GOT IT!" : "WRONG ANSWER, BUCKO!");
            }}>
                <input type="text" style={{borderWidth : "5px"}} onChange={(e) => setAnswer(e.target.value)}/>
                <input type="submit" value={"GIVE ANSWER"} style={{borderWidth : "5px"}}/>
            </form>
            <hr />
        </div>
    )
}

export default LetterCypher