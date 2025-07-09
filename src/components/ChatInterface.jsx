import React, { useState } from "react";
import PDFPopup from "./PDFPopup";

const ChatInterface = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPDF, setShowPDF] = useState(false);

  const handleSubmit = () => {
    if (!query.trim()) return;

    const userMessage = { type: "user", text: query };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setQuery("");

    setTimeout(() => {
      const botResponse = {
        type: "bot",
        text:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citation: {
          text:
            "As the age of the deceased at the time of accident was held to be about 54–55 years... 10% of annual income should have been awarded on account of future prospects. (Para 7)",
          link:
            "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
        },
      };
      setMessages((prev) => [...prev, botResponse]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto h-screen flex flex-col bg-gray-100 rounded shadow">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[80%] p-3 rounded-lg text-sm ${
              msg.type === "user"
                ? "ml-auto bg-blue-500 text-white"
                : "mr-auto bg-white shadow"
            }`}
          >
            {msg.text}
            {msg.type === "bot" && msg.citation && (
              <div className="mt-2 text-xs text-blue-600 underline cursor-pointer" onClick={() => setShowPDF(true)}>
                {msg.citation.text}
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="mr-auto bg-white p-3 rounded-lg shadow text-sm">Generating...</div>
        )}
      </div>

      <div className="p-4 border-t bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded px-4 py-2"
            placeholder="Type your legal question..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-Black px-4 py-2 rounded"
            disabled={loading}
          >
            Send
          </button>
        </div>
      </div>

      {showPDF && (
        <PDFPopup
          pdfLink={
            "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz"
          }
          onClose={() => setShowPDF(false)}
        />
      )}
    </div>
  );
};

export default ChatInterface;
