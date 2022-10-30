import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Typed from 'react-typed';
import puzzles from './missing-letters/letterpuzzles.json'
import API from '../services/apiClient';
import { useAuthContext } from '../contexts/user'
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom'
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
    const { user } = useAuthContext()
    const navigate = useNavigate()
    const [res, setRes] = useState(null)
    const [news, setNews] = useState(null)
    const handleOnSubmit = async () => {
        const { data, error } = await API.updatePoints(
        `/user/${user.username}/points`
      );
      setRes(data)
    }

    const fetchUser = async () => {
        const { data, error } = await API.fetchUser(
        `/user/${user.username}`
      );
      setNews(data)
    }

    const [clicked, setClicked] = useState(false)
    const [nav, setNav] = useState(false)
    const [answer, setAnswer] = useState(""); //the player's answer
    const randomIndex = Math.floor(Math.random() * (puzzles.length - 1));
    const puzzle = puzzles[randomIndex];
    if (answer.toUpperCase() == puzzle.hidden && clicked == true){
        handleOnSubmit()
        fetchUser()
        console.log(res)
    }
    return (
            <>
            <section
            class="relative"
            >
            <div class="mx-auto max-w-screen-xl min-h-[72vh] px-4 py-8 sm:px-6 lg:px-8">
                <div class="max-w-xl mt-[10vh] ml-[24vh] text-center sm:text-left">
                <div className="letter-cypher-window">
                <h1>Find the encoded string in the following message:</h1>
                    <h1 className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent sm:text-4xl'>
                    <Typed strings={[`${puzzle.message}`]} typeSpeed={40} backSpeed={0}/>
                    </h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    alert(answer.toUpperCase() == puzzle.hidden ? "YOU GOT IT!" : "WRONG ANSWER, BUCKO!");
                }}>
                    <input type="text" style={{borderWidth : "5px"}} onChange={(e) => setAnswer(e.target.value)}/>
                    <label onClick={() => setClicked(true)} type="submit" htmlFor="my-modal-3" className="btn modal-button" style={{borderWidth : "5px"}}>Give Answer</label>
                    
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => navigate('/home')}>✕</label>
                        {answer.toUpperCase() == puzzle.hidden && clicked == true ? 
                        <>                       
                        <h3 className="text-lg font-bold">Correct Answer!</h3>
                        <p className="py-4">Your answer correct!</p>
                        <article
                        class="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-6"
                        >
                        <span class="rounded-full bg-blue-100 p-3 text-blue-600">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                            </svg>
                        </span>

                        <div>
                            <p class="text-2xl font-medium text-gray-900">¤ 
                            {news?.totalpoints != null ? <CountUp start={user.totalpoints} end={news.totalpoints} /> : user.totalpoints}
                            </p>

                            <p class="text-sm text-gray-500">Total Points</p>
                        </div>
                        </article>
                        </>
                        :
                        <>
                        <h3 className="text-lg font-bold">Incorrect Answer</h3>
                        <p className="py-4">Your answer is wrong agent, try again.</p>
                        </>}
                    </div>
                    </div>

                </form>
                <hr />
                </div>

                </div>
            </div>
            </section>
            </>
        )
}
//   <h1
//   class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
// >
//   Understand User Flow.

//   <span class="sm:block"> Increase Conversion. </span>
// </h1>
export default MissingLetters