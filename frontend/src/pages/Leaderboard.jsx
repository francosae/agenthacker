import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Leaderboard.css'
import { useAuthContext } from '../contexts/user'
import API from '../services/apiClient'
import { useState, useEffect } from 'react'
function Leaderboard() {
  return (
  <>
  <Navbar />
  <Header />
  <GamesHeader />
  <GameDisplay />
  <Footer />
  </>
  )
}

function Header(){
  return(
    <>
    <header class="bg-gray-900 pattern">
        <div class=" container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div class="flex flex-col items-center py-6 lg:h-[15vh] lg:flex-row">
                <div class="lg:w-1/2">
                    <h2 class="text-4xl font-semibold text-gray-100">Spy Leaderboard 🕵️</h2>
    
                    <h3 class="text-2xl font-semibold text-gray-100">
                        Check out the top <span class="text-blue-400">agents!</span>
                    </h3>
                </div>
    

            </div>
        </div>
    </header>
    </>
  )
}


function GamesHeader(){
return(
<section
  class="relative"
>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-2xl font-bold sm:text-4xl">
        Top Agents by Points!
      </h1>

      <p class="mt-1 max-w-lg sm:text-xl sm:leading-relaxed">
        Complete missions to increase your ranking, agent!
      </p>

    </div>
  </div>
</section>
)
}

function GameCard(){
  return(
<article class="rounded-xl border border-gray-700 bg-[#122c5a] p-4">
  <div class="flex items-center">
    <img
      alt="Developer"
      src="https://picsum.photos/200"
      class="h-16 w-16 rounded-full object-cover"
    />

    <div class="ml-3">
      <h3 class="text-lg font-medium text-white">Agent Mac</h3>
    </div>
  </div>

  <ul class="mt-4 space-y-2">
    <li>
      <PointCointer />
    </li>
  </ul>
</article>
  )
}

function GameDisplay(){
    const [users, setUsers] = useState(null)
    useEffect(() => {
        async function fetchUsers(){
          const { data } = await API.fetchUsers()
          setUsers(data)
        }
        fetchUsers()
      }, [])

      console.log(users)
return(
<section
  class="relative"
>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="grid grid-cols-3 gap-4 ">
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
    </div>
  </div>
  <br></br>
</section>
)
}


function PointCointer(){
return(
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
    <p class="text-2xl font-medium text-gray-900">¤ 1000 </p>

    <p class="text-sm text-gray-500">Total Points</p>
  </div>
</article>
)
}
export default Leaderboard