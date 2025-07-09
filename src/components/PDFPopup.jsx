import React from "react";

const PDFPopup = ({ pdfLink, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative w-4/5 h-4/5 bg-white rounded shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500 font-bold"
        >
          ✖
        </button>
        <iframe
          title="PDF Viewer"
          src={pdfLink}
          className="w-full h-full rounded"
        />
      </div>
    </div>
  );
};

export default PDFPopup;