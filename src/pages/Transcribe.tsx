import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { ax } from "../config/axios";
import Loader from "../components/Loader";
import { getVideoId } from "../helper/helper";

const Transcribe = () => {
  const navigate = useNavigate();
  const [ytLink, setYtLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [loaderTxt, setLoaderTxt] = useState(
    "Processing your video might take time..."
  );

  // useEffect(() => {
  //   localStorage.removeItem("yt");
  //   localStorage.removeItem("transcript");
  // }, []);

  useEffect(() => {
    const fetchDuration = async () => {
      const videoId = getVideoId(ytLink);
      const res = await ax.get("/yt/duration", { params: { v_id: videoId } });
      setLoaderTxt(
        `Your video is ${res?.data?.duration}\n wait some time till transcription is done...`
      );
    };
    if (ytLink) {
      setTimeout(() => {
        fetchDuration();
      }, 10000);
    }
  }, [ytLink]);

  const fetchTranscript = async () => {
    setLoading(true);
    try {
      const res = await ax.post("/yt/get-transcript", { videoUrl: ytLink });
      if (res?.data?.status === "err") {
        toast.error(res?.data?.message);
      }
      if (res?.data?.status === "success") {
        const transcript = res?.data?.transcribeRes;
        // alert(transcript)
        localStorage.setItem("transcript", transcript);
        setTimeout(() => {
          navigate("/sm");
        }, 1000);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const submitYt = () => {
    if (!ytLink) {
      toast.error("Please provide URL...");
      return;
    }
    const obj = {
      url: ytLink,
      src: "youtube",
    };
    localStorage.setItem("yt", JSON.stringify(obj));
    fetchTranscript();
  };

  if (loading) return <Loader text={loaderTxt} />;
  return (
    <div className="auto w-full h-[60vh] sm:h-[80vh] lg:w-[1024px] mx-auto pt-40  flex flex-col items-center justify-center">
      <ToastContainer />
      <h1 className="text-lg sm:text-2xl md:text-5xl text-blue mb-5 text-center">
        {/* Get a transcript first: */}
        Paste your youtube video URL...
      </h1>
      <div className="flex flex-col sm:flex-row items-center  gap-6 w-full md:w-[600px] mt-4 sm:mt-10">
        <input
          type="text"
          value={ytLink}
          onChange={(e) => setYtLink(e.target.value)}
          placeholder="Enter your youTube URL..."
          className="text-gray-500 outline-none text-base rounded-md p-2 px-5 w-[90%] sm:flex-1 border border-primary bg-black "
        />
        <button
          onClick={submitYt}
          className="bg-blue p-2 px-4 text-white rounded-md hover:bg-primary">
          Submit
        </button>
      </div>
      {/*  */}
      {/*  */}
      {/* <span className="text-xl text-gray-400 my-8">OR</span> */}
      {/*  */}
      {/*  */}
      {/* <div className="flex flex-col sm:flex-row items-center  gap-6 w-full md:w-[600px]">
        <input
          type="text"
          placeholder="Enter your google doc URL..."
          className="text-gray-500 outline-none text-base rounded-md p-2 px-5 w-[90%] sm:flex-1 border border-primary bg-black "
        />
        <button
          onClick={() => {
            alert("This feature is not enabled yet!");
          }}
          className="bg-blue p-2 px-4 text-white rounded-md hover:bg-primary">
          Submit
        </button>
      </div> */}
    </div>
  );
};

export default Transcribe;
