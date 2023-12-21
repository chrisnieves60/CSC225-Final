

import { Link } from 'react-router-dom';
import StarInfo from './StarInfo';

const Stars = () => {
  return (
    <div className='text-white'>
      <div className='flex justify-center'>
        <h1 className='mt-4 mb-5'>Please scroll up-down to see more!</h1>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 overflow-auto max-h-[80vh] ">
          {StarInfo.map((star) => (
            <div key={star.id} className="bg-white border border-gray-200 bg-orange-500 flex flex-col w-70 mb-4 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      {<div><a href="#">
        <div className='w-full h-64 overflow-hidden'>
        <img class="rounded-t-lg object-cover w-full h-full" src={star.imageUrl} alt="star" />
        </div>
    </a>
    <div class="p-4">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{star.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{star.price}</p>
        <Link to={`/Stars/${star.id}`}>
        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Buy
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="#FFA500" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
        </Link>
    </div></div>}
    </div>
    ))}


</div>
    </div>
    </div>
  );
}

export default Stars; 