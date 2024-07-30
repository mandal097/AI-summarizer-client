import { Link } from "react-router-dom";
import Features from "../components/Features";

const About = () => {
  return (
    <div className="w-full p-4 lg:w-[1024px] pt-28 mx-auto">
      <h1 className="text-xl mb-5 text-primary">
        Welcome to YouTube Transcript and Summarization
      </h1>
      <p className="text-gray-400 text-base font-semibold">
        Our platform provides an easy way to transcribe and summarize YouTube
        videos. Simply enter the YouTube video URL to get a complete transcript
        and a concise summary. Whether you're looking to capture key points from
        educational content, interviews, or any video, our tool helps you save
        time and get the information you need quickly and efficiently. Enjoy
        seamless access to video content insights with just a few clicks!
      </p>

      <p className="text-gray-500 mt-6 text-lg ">
        Click the button to start transcribing your first YouTube video and
        generate a summary effortlessly!
      </p>

      <div className="bg-primary w-fit px-3 py-2 rounded-md mt-2 hover:bg-blue">
        <Link to="/tr" className="text-white">
        Start Now
        </Link>
      </div>
      <Features />
    </div>
  );
};

export default About;
