import React from "react";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
       <span className="text-2xl font-bold">Sumlify</span>
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/RuneSong-ctrl/Sumlify", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">AI Helps </span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Sumlify, an article summarizer that
        transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
