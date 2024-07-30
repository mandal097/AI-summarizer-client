import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Transcribe = () => {
  const navigate = useNavigate();
  const [ytLink, setYtLink] = useState("");

  useEffect(() => {
    localStorage.removeItem("yt");
  }, []);

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
    navigate("/sm");
  };

  return (
    <div className="auto w-full lg:w-[1024px] mx-auto pt-40  flex flex-col items-center justify-center">
      <ToastContainer/>
      <h1 className="text-2xl md:text-5xl text-blue mb-5 text-center">
        Get a transcript first:
      </h1>
      <div className="flex flex-col sm:flex-row items-center  gap-6 w-full md:w-[600px]">
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
      <span className="text-xl text-gray-400 my-8">OR</span>
      {/*  */}
      {/*  */}
      <div className="flex flex-col sm:flex-row items-center  gap-6 w-full md:w-[600px]">
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
      </div>
    </div>
  );
};

export default Transcribe;
