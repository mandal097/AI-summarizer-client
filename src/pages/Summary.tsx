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
  const [text, setText] = useState<string | null>("");
  const [transcript, setTranscript] = useState<string | null>("");
  const [loading, setLoading] = useState(false);
  const [isSummary, setIsSummary] = useState(false);

  useEffect(() => {
    const jsonString: string | null = localStorage.getItem("yt");

    if (jsonString) {
      try {
        const data: ParsedData = JSON.parse(jsonString);
        const v_id = getVideoId(data?.url);
        setVideoId(v_id);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
    const transcript_ = localStorage.getItem("transcript");
    // console.log("summary\n", transcript_);
    setTranscript(transcript_);
    setText(transcript_);
  }, []);

  const getSummary = async () => {
    setLoading(true);
    try {
      const res = await ax.post("/yt/summary", { transcript });
      if (res?.data?.status === "err") {
        toast.error(res?.data?.message);
      }
      if (res?.data?.status === "success") {
        setText(res?.data?.data);
        setIsSummary(true);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (param: string) => {
    try {
      const copyText: string | null = param === "tr" ? transcript : text;
      await navigator.clipboard.writeText(String(copyText));
      toast.success("Text copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy text.");
    }
  };

  if (loading) return <Loader text="Summarizing your provided transcript..." />;
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
        <div className="w-full sm:mt-20 flex flex-col">
          <button
            onClick={() => navigate("/tr")}
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue">
            New Request
          </button>
          <button
            onClick={() => copyToClipboard("tr")}
            className="border border-primary text-primary hover:text-white mt-2 px-4 py-2 rounded-md hover:bg-blue">
            Copy entire transcript
          </button>
          {isSummary && (
            <button
              onClick={() => copyToClipboard("sm")}
              className="border border-primary text-primary hover:text-white mt-2 px-4 py-2 rounded-md hover:bg-blue">
              Copy summary
            </button>
          )}
        </div>
      </div>

      {/* Right Section */}
      {/* Right Section */}
      {/* Right Section */}
      <div className="flex-1 p-1 bg-gray-950 pb-24 sm:px-6">
        <h2 className="text-xl text-primary font-semibold mb-4">
          {text
            ? isSummary
              ? "Summary"
              : "Full transcript of your source"
            : ""}
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
