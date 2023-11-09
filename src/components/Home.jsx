import StarInfo from "./StarInfo";
import { Link } from "react-router-dom";
const Home = () => {


    return(
        <><div className="flex justify-center mt-20 text-white">
            <h1 >Welcome to Starrly! Your one stop shop for stars. </h1>
            
        </div>

<div className="flex justify-center mt-20 space-x-2">
    {StarInfo.slice(0, 3).map((star) => (
    <div key={star.id} className="max-w-sm bg-orange-500 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-4">
      {<div><a href="#">
        <img class="rounded-t-lg h-40 w-80" src={star.imageUrl} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{star.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{star.price}</p>
        <Link to={`/Stars/${star.id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            More Info
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div></div>}
    </div>
    ))}


</div>
<div className="flex justify-center">
<Link to="/Stars"><button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  See more -{">"}
</button>  
</Link>
</div>
        </>
    )
} 

export default Home; 