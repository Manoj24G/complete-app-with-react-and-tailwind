import React  from "react"
import heroImage from "../images/img1.png"

const Hero = () => {
  return (
    <div id="Intro" className=" w-full h-screen bg-zinc-100 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full py-8 ">
            <h1 className="text-5xl font-bold px-8">Life is a game. Money is how we keep score.</h1>

            <p className="my-4 px-8">Life is a game just like all the other games. The only difference is that life is the only game that we don't realize is a game.</p>
            <button className="py-2 px-12 ml-8 mr-60 ">Get Started</button>
        </div>
        <div>
        <img className=" ml-10 pt-5 w-100% max-h-screen" src={heroImage} alt='Image' />
        </div>
        <div>



        </div>
      </div>
    </div>
    
  );
};

export default Hero;
