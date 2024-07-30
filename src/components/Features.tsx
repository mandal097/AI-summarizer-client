import React from "react";

interface FeatureCardProps {
  //   icon: JSX.Element;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="bg-gray-950 shadow-lg rounded-lg overflow-hidden border border-gray-200">
    <div className="flex items-center- p-6 space-x-4">
      <div>
        <h3 className="text-xl text-blue font-semibold mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <div className="p-2 mt-10 sm:p-6 h-auto flex flex-col items-center space-y-6">
      <div className="grid gap-6  max-w-4xl">
        <FeatureCard
          title="Accurate Transcriptions"
          description="Convert spoken content into written text with precision, ensuring you capture every detail of your favorite videos. Whether it's for note-taking, content creation, or accessibility, our transcription service makes it easy to get accurate text from any video."
        />

        <FeatureCard
          title="Concise Summaries"
          description="Save time by getting comprehensive summaries of YouTube videos. Our summarization tool distills lengthy videos into clear, concise summaries, highlighting key points and essential information so you can grasp the content quickly without watching the entire video."
        />

        <FeatureCard
          title="Seamless Integration"
          description="Integrate our service smoothly with your existing workflow. Whether you're a student, researcher, content creator, or professional, our app fits effortlessly into your routine, helping you get the most out of your video content."
        />

        <FeatureCard
          title="User-Friendly Interface"
          description="Enjoy an intuitive and easy-to-navigate interface that allows you to manage and process your video content with just a few clicks. Our app is designed to be straightforward, making transcription and summarization accessible to everyone."
        />
      </div>
    </div>
  );
};

export default Features;
