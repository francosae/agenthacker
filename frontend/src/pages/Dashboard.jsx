import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useAuthContext } from '../contexts/user'
import Userdropdown from '../components/Userdropdown'
function Dashboard() {
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
  const { user } = useAuthContext();
  return(
  <header aria-label="Page Header" class="bg-gray-50">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="flex items-center sm:justify-between sm:gap-4">
        <div class="relative hidden sm:block">
          <label class="sr-only" for="search"> Search </label>
  
          <input
            class="h-10 w-full rounded-lg border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
            id="search"
            type="search"
            placeholder="Search for a mission..."
          />
  
          <button
            type="button"
            class="absolute top-1/2 right-1 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
          >
            <span class="sr-only">Submit Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
  
        <div
          class="flex flex-1 items-center justify-between gap-8 sm:justify-end"
        >
          <div class="flex gap-4">
            <button
              type="button"
              class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
            >
              <span class="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
  
            <a
              href="#"
              class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
            >
              <span class="sr-only">Notifications</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              
            </a>
          </div>
  
          <Userdropdown user={user}/>
        </div>
      </div>

      <div class="mt-8 grid grid-rows-3 grid-flow-col gap-4">

      <div class="col-span-2 ...">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
          Welcome Back, Agent {user.username}!
        </h1></div>
      <div class="row-span-2 col-span-2 ...">
      <p class="mt-1.5 text-md text-gray-500">
      What type of shoes do spies wear?
      Sneakers.🕵️ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      </p>
      <b>Progress until next title!</b> <progress className="progress progress-secondary w-56" value="0" max="100"></progress>
      </div>
      <div class="row-span-3 ..."><PointCounter />
      </div>
      </div>
    </div>
  </header>  
  )
}

function PointCounter(){
  const { user } = useAuthContext();

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
    <p class="text-2xl font-medium text-gray-900">¤ {user.totalpoints} </p>

    <p class="text-sm text-gray-500">Total Points</p>
  </div>
</article>
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
        Agent Missions
      </h1>

      <p class="mt-1 max-w-lg sm:text-xl sm:leading-relaxed">
        Complete missions and get points to be the best spy!
      </p>

    </div>
  </div>
</section>
)
}

function GameCard(){
  return(
<article class="flex bg-white transition hover:shadow-xl">
  <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
      datetime="2022-10-10"
      class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
    >
      <span>2022</span>
      <span class="w-px flex-1 bg-gray-900/10"></span>
      <span>Oct 10</span>
    </time>
  </div>

  <div class="hidden sm:block sm:basis-56">
    <img
      alt="Guitar"
      src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      class="aspect-square h-full w-full object-cover"
    />
  </div>

  <div class="flex flex-1 flex-col justify-between">
    <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <a href="#">
        <h3 class="font-bold uppercase text-gray-900">
          Operation Decrypt
        </h3>
      </a>

      <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
        sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
        voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
        Molestias explicabo corporis voluptatem?
      </p>
    </div>

    <div class="sm:flex sm:items-end sm:justify-end">
      <a
        href="#"
        class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
      >
        START MISSION
      </a>
    </div>
  </div>
</article>
  )
}

function GameDisplay(){
return(
<section
  class="relative"
>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="grid grid-rows-3 grid-flow-col gap-4">
    <div class="row-span-3 ..."><GameCard /></div>
    </div>
    <br></br>
    <div class="grid grid-rows-3 grid-flow-col gap-4">
    <div class="row-span-3 ..."><GameCard /></div>
    </div>
    <br></br>
    <div class="grid grid-rows-3 grid-flow-col gap-4">
    <div class="row-span-3 ..."><GameCard /></div>
    </div>
  </div>
  <br></br>
</section>
)
}

export default Dashboard