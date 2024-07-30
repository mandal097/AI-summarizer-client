import { Link } from "react-router-dom";
import Features from "../components/Features";

const Home = () => {
  return (
    <div className="auto pt-40 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-5xl text-primary mb-2">
          YouTube Transcript & Summary
        </h1>
        <p className="text-xl text-gray-500 my-8">
          Effortlessly transcribe and summarize YouTube videos. Get insights
          quickly and efficiently.
        </p>
        <div className="flex justify-center space-x-8">
          <img
            src="/yt_icon.png"
            alt="Insights"
            className="w-16 h-16 sm:w-24 sm:h-24"
          />
          <img
            src="/transcription.png"
            alt="Transcription"
            className="w-16 h-16 sm:w-24 sm:h-24"
          />
          <img
            src="/report.png"
            alt="Summarization"
            className="w-16 h-16 sm:w-24 sm:h-24"
          />
        </div>

      </div>
      <Link to="/tr">
        <p className="mt-8 bg-blue  text-white py-2 px-6 rounded-lg text-lg hover:bg-primary">
          Start Now
        </p>
      </Link>
      <Features/>
    </div>
  );
};

export default Home;
