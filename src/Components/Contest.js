import React, { useState } from 'react'

function Contest(props) {
    let path = `./icons/${props.data.site}.png`
    let stime = new Date(props.data.start_time).toLocaleString();
    let etime = new Date(props.data.end_time).toLocaleString();
    return (
        <div className="p-4 md:w-1/3 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 ">
            <div className="flex rounded-lg h-full bg-stone-900 bg-opacity-60 p-8 flex-col shadow-2xl">
                <div className="flex items-center mb-3 ">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                        <img className='rounded-lg' alt='' src={path}></img>
                    </div>
                    <a href={props.data.url}>
                        <h2 className="text-white text-lg title-font font-medium font-Poppins hover:underline">{props.data.name}</h2>
                    </a>
                </div>
                <div className="flex-grow text-center">
                    <div className="leading-relaxed text-2xl font-Poppins text-green-500">{props.data.site}</div>
                    <div className="leading-relaxed text-base">Start Time : {stime}</div>
                    <div className="leading-relaxed text-base">End Time : {etime}</div>
                    <a href={props.data.url} className="mt-3 text-indigo-400 inline-flex items-center">View contest
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contest
