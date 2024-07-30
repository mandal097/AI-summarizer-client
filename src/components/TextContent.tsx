interface TextContentProps {
  content: string;
}
import he from "he";

const processText = (text: string) => {
  // Decode HTML entities
  const decodedText = he.decode(text);

  // Split the text by newlines
  const paragraphs = decodedText.split("\n").filter((p) => p.trim() !== "");

  return paragraphs.map((para, index) => {
    // Check if the paragraph is a bullet point list
    if (para.trim().startsWith("*")) {
      const bulletPoints = para.split("*").filter((bp) => bp.trim() !== "");
      return (
        <ul key={index} className="list-disc list-inside my-4">
          {bulletPoints.map((bp, i) => (
            <li key={i} className="mb-2">
              {bp.trim()}
            </li>
          ))}
        </ul>
      );
    }

    // Return regular paragraph
    return (
      <p key={index} className="mb-4">
        {para}
      </p>
    );
  });
};
const TextContent = ({ content }: TextContentProps) => {
  return (
    <div className="my-3 px-4 py-3 rounded-lg h-full">
      <p className="text text-sm text-gray-200">{processText(content)}</p>
      {!content && (
        <div className="text-2xl h-[50vh] text-gray-300 flex justify-center items-center gap-3 font-bold">
          <h2 className="font-light">Paste your</h2>
          <img src="/yt_img.png" alt="youtube icon" className="w-12 h-12" />
          <h2 className="font-light">link to get summary...</h2>
        </div>
      )}
    </div>
  );
};

export default TextContent;
