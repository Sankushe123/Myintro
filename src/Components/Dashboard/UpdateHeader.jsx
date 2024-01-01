import React, { useState } from 'react';

const UpdateHeader = () => {
  const [header, setHeader] = useState('');
  const [description, setDescription] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [pngFile, setPngFile] = useState(null);

  const handlePdfFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handlePngFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'image/png') {
      setPngFile(file);
    } else {
      alert('Please upload a valid PNG image.');
    }
  };

  const handlePreviewPdf = () => {
    // Add code to handle PDF preview
  };

  const handlePreviewPng = () => {
    // Add code to handle PNG preview
  };

  const handleSubmit = () => {
    // Add code to handle form submission
  };

  return (
    <div className="container mx-auto mt-8 md:mx-auto sm:mx-auto">
      <form className="max-w-2xl mx-10">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="header">
            Header floating Words
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="header"
            type="text"
            placeholder="Enter header"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Header Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pdfFile">
            Upload Upadted Resume
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pdfFile"
            type="file"
            accept=".pdf"
            onChange={handlePdfFileChange}
          />
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handlePreviewPdf}
          >
            Preview PDF
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pngFile">
           Upload Diaplay Immage
          </label>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pngFile"
            type="file"
            accept=".png"
            onChange={handlePngFileChange}
          />
          <button
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handlePreviewPng}
          >
            Preview PNG
          </button>
        </div>
        <div className="flex mt-10">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 mr-5 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateHeader;
