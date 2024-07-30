import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getVideoId } from "../helper/helper";
import { toast, ToastContainer } from "react-toastify";
import { ax } from "../config/axios";
import Loader from "../components/Loader";
import TextContent from "../components/TextContent";

interface ParsedData {
  url: string;
  src: string;
}

const Summary = () => {
  const navigate = useNavigate();
  const [videoId, setVideoId] = useState<string | null>("");
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [text, setText] = useState("");
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(true);
  const [loaderTxt, setLoaderTxt] = useState(
    "Processing your video might take time..."
  );

  useEffect(() => {
    const jsonString: string | null = localStorage.getItem("yt");

    if (jsonString) {
      try {
        const data: ParsedData = JSON.parse(jsonString);
        setVideoUrl(data?.url);
        const v_id = getVideoId(data?.url);
        setVideoId(v_id);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, []);

  useEffect(() => {
    const fetchTranscript = async () => {
      setLoading(true);
      try {
        const res = await ax.post("/yt/get-transcript", { videoUrl });
        if (res?.data?.status === "err") {
          toast.error(res?.data?.message);
        }
        if (res?.data?.status === "success") {
          setText(res?.data?.transcribeRes);
          setTranscript(res?.data?.transcribeRes);
        }
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchTranscript();
  }, [videoId, videoUrl]);

  const getSummary = async () => {
    setLoading(true);
    setLoaderTxt("Summarizing your provided transcript...");
    try {
      const res = await ax.post("/yt/summary", { transcript });
      if (res?.data?.status === "err") {
        toast.error(res?.data?.message);
      }
      if (res?.data?.status === "success") {
        console.log(res?.data);
        setText(res?.data?.data);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader text={loaderTxt} />;
  return (
    <div className="min-h-screen auto pt-24 sm:pt-32 flex flex-col sm:flex-row p-4 relative gap-3">
      <ToastContainer />
      {/* Left Section */}
      <div className="sm:sticky sm:h-screen top-24 w-full sm:w-1/3 bg-gray-950 p-6">
        <iframe
          className="w-full h-56 hidden sm:block"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        <div className="w-full sm:mt-32 flex flex-col">
          <button
            onClick={() => navigate("/tr")}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue">
            New Request
          </button>
          <button
            onClick={() => navigate("/tr")}
            className="border border-primary text-primary mt-2 px-4 py-2 rounded-md hover:bg-blue">
            Copy entire transcript
          </button>
        </div>
      </div>

      {/* Right Section */}
      {/* Right Section */}
      {/* Right Section */}
      <div className="flex-1 p-1 bg-gray-950 pb-24 sm:px-6">
        <h2 className="text-xl text-primary font-semibold mb-4">
          Full transcript of your source
        </h2>
        <TextContent content={text} />
      </div>
      {text && (
        <button
          onClick={getSummary}
          className="fixed bottom-0 sm:w-[65.4%] w-full right-0 text-white p-4 text-center bg-gray-900 hover:bg-primary hover:font-bold z-30">
          Get Summary
        </button>
      )}
    </div>
  );
};

export default Summary;
