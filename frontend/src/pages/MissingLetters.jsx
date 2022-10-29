import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Typed from 'react-typed';
import puzzles from '../minigames/missing-letters/letterpuzzles.json'
function MissingLetters() {
  return (
    <>
    <Navbar />
    <Header />
    <GameBody />
    <Footer />
    </>
  )
}


function Header(){
    return(
      <>
      <header class="bg-gray-900 pattern">
          <div class=" container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
              <div class="flex flex-col items-center py-6 lg:h-[6vh] lg:flex-row">
                  <div class="lg:w-1/2">
                      <h2 class="text-4xl font-semibold text-gray-100">Missing Letters 🕵️</h2>
      
                      <h3 class="text-2xl font-semibold text-gray-100">
                          Figure out the missing letters and enter the secret <span class="text-blue-400">message.</span>
                      </h3>
                  </div>
              </div>
          </div>
      </header>
      </>
    )
  }

function GameBody(){

    const [answer, setAnswer] = useState(""); //the player's answer
    const randomIndex = Math.floor(Math.random() * (puzzles.length - 1));
    const puzzle = puzzles[randomIndex];
        return (
            <section
            class="relative"
            >
            <div class="mx-auto max-w-screen-xl min-h-[72vh] px-4 py-8 sm:px-6 lg:px-8">
                <div class="max-w-xl text-center sm:text-left">
                <div className="letter-cypher-window">
                <h1>Find the encoded string in the following message:</h1>
                    <h1 className='text-2xl font-semibold text-black'>
                    <Typed strings={[`${puzzle.message}`]} typeSpeed={40} backSpeed={0}/>
                    </h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    alert(answer.toUpperCase() == puzzle.hidden ? "YOU GOT IT!" : "WRONG ANSWER, BUCKO!");
                }}>
                    <input type="text" style={{borderWidth : "5px"}} onChange={(e) => setAnswer(e.target.value)}/>
                    <input type="submit" value={"GIVE ANSWER"} style={{borderWidth : "5px"}}/>
                </form>
                <hr />
                </div>

                </div>
            </div>
            </section>
        )
}
//   <h1
//   class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
// >
//   Understand User Flow.

//   <span class="sm:block"> Increase Conversion. </span>
// </h1>
export default MissingLetters