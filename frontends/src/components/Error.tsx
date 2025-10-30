import { Link } from "react-scroll"

const Error = () => {
  return (
    <div>
      <h1 className='text-center text-4xl pt-30 pb-10'>Couldn't Load Page</h1>
      <Link to="/"  className="px-3 py-1.5 bg-gray-500 hover:bg-gray-600 text-gray-300 " >
            Go to Home
        </Link>
    </div>
  ) 
}

export default Error