import { useState } from 'react'

function LetterCypher(props) {
    const [answer, setAnswer] = useState(""); //compare this
    return (
        <div className="letter-cypher-window">
            <h1>{props.message}</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                alert(answer.toUpperCase() == props.hidden ? "YOU GOT IT!" : "WRONG ANSWER, BUCKO!");
            }}>
                <input type="text" onChange={(e) => setAnswer(e.target.value)}/>
                <input type="submit" value={"GIVE ANSWER"}/>
            </form>
        </div>
    )
}

export default LetterCypher