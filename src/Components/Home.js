import React, { useState, useEffect } from 'react'
import Contest from './Contest'

function Home(props) {
    let data = props.data;
    return (
        <div>
            <section className="text-gray-400 bg-emerald-900 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-col text-center w-full mb-20">
                        {/* <h1 className="text-xs text-indigo-400 tracking-widest font-medium title-font mb-1">ALL CONTESTS</h1> */}
                        <h1 className="sm:text-3xl text-2xl font-medium title-font font-Poppins text-white underline underline-offset-4">Contests</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {data.map((contestList) => { return <><Contest key={contestList.sno} data={contestList} /></> })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
