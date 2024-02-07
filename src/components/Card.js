import React from "react";

const Card = ({ title, text, url, score }) => {


    return (
        <div className="m-4 p-4">
            <div className="h-62 w-54 bg-slate-300 text-black border border-box shadow-lg p-2 rounded-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-slate-400 mt-1 whitespace-normal md:w-full lg:w-full break-all text-xl">
                <h1 className=""><span className=" sm:text-2xl text-2xl font-semibold">Title:</span> <span className="text-2xl md:text-xl">{title}</span></h1>
                <p className="w-10/14"><span className="sm:text-2xl text-2xl font-semibold">SelfText_HTML:</span> <span className="text-2xl  md:text-xl pt-1">{text}</span></p>
                <p><span className="text-2xl font-semibold xl:text-2xl">URL:</span><span className="text-2xl md:text-xl pt-1 xl:text-xl ">{url}</span></p>
                <h4><span className="text-2xl font-semibold pt-4 xl:text-2xl">Score:</span>{score}</h4>
            </div>
        </div>
    )
}

export default Card







