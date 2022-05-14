import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { BsTerminal} from "react-icons/bs";
// import { AiFillHome } from "react-icons/ai"

function Navbar() {
    const [site, setSite] = useState("HackerEarth");
    const [visit, setVisit] = useState(0);
    let navigate = useNavigate();
    const handleLogout = (e) => {
        localStorage.removeItem('token');
        navigate('/');
    }
    const handleClick = value => () => {
        setSite(value);
        setVisit(1);
    }
    useEffect(() => {
        !visit==0 ? navigate('/filter', { state: {site : site} }) : navigate('/')
      }, [site]);
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow-lg">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    {/* <img src="https://img.icons8.com/wired/64/000000/code.png" className="mr-3 h-6 sm:h-9 fill-white" alt="CodeHub Logo" /> */}
                    <div className="mr-3 text-3xl text-white"> <BsTerminal/></div>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CodeHub</span>
                </a>
                {/* {!localStorage.getItem('token') ? */}
                    <div className="flex md:order-2 gap-x-2">
                        {/* <a href="/login">
                                <button type="button" className="text-white bg-gray-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900 shadow-xl">Log in</button>
                            </a>
                            <a href="/signup">
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-xl">Sign up</button>
                            </a> */}
                        <div className="p-2">
                            <div className="dropdown inline-block">
                                <button className="bg-emerald-900 text-green-500 font-semibold py-2 px-4 rounded-lg shadow-xl inline-flex items-center">
                                    <span className="mr-1">Filter</span>
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                </button>
                                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                                    <li onClick={ handleClick('AtCoder')}><a className="rounded-t bg-gray-200 hover:bg-green-400 py-2 px-4 block whitespace-no-wrap" >AtCoder</a></li>
                                    <li onClick={ handleClick('CodeChef')}><a className="bg-gray-200 hover:bg-green-400 py-2 px-4 block whitespace-no-wrap" >CodeChef</a></li>
                                    <li onClick={ handleClick('LeetCode')}><a className="bg-gray-200 hover:bg-green-400 py-2 px-4 block whitespace-no-wrap" >LeetCode</a></li>
                                    <li onClick={ handleClick('Kick Start')}><a className="bg-gray-200 hover:bg-green-400 py-2 px-4 block whitespace-no-wrap" >Kick Start</a></li>
                                    <li onClick={ handleClick('CodeForces')}><a className="bg-gray-200 hover:bg-green-400 py-2 px-4 block whitespace-no-wrap" >CodeForces</a></li>
                                    <li onClick={ handleClick('HackerRank')}><a className="bg-gray-200 hover:bg-green-400 py-2 px-4 block whitespace-no-wrap" >HackerRank</a></li>
                                    <li onClick={ handleClick('HackerEarth')}><a className="rounded-b bg-gray-200 hover:bg-green-400 py-2 px-4 block whitespace-no-wrap" >HackerEarth</a></li>
                                </ul>
                            </div>

                        </div>
                    </div> :
                    {/* // <div className="flex md:order-2 gap-x-2">
                    //     <a href="/home">
                    //         <div className="text-white rounded-full text-2xl px-3 py-2.5 text-center mr-3 md:mr-0 bg-gray-600 hover:bg-gray-700 shadow-xl"><AiFillHome /></div>
                    //     </a>
                    //     <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-xl" onClick={handleLogout}>Log out</button>
                    // </div>
                } */}

                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                </div>
            </div>
        </nav>

    )
}

export default Navbar
