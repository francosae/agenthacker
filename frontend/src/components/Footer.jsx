import React from 'react'

function Footer() {

  return (
<footer class="bg-[#122c5a] dark:bg-gray-900">
    <div class="container px-6 py-8 mx-auto">
        <div class="text-center">
            <p class="max-w-md mx-auto mt-2 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </div>

        <hr class="my-10 border-gray-200 dark:border-gray-700" />

        <div class="flex flex-col items-center sm:flex-row sm:justify-between">
            <p class="text-sm text-white">Made for MLH's Agent:Hacker 2</p>

            <div class="flex mt-3 -mx-2 sm:mt-0">
                <a href="#" class="mx-2 text-sm text-white transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Github </a>

                <a href="#" class="mx-2 text-sm text-white transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                <a href="#" class="mx-2 text-sm text-white transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer