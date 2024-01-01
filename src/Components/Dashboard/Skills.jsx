import React, { useState } from 'react';

const Skills = () => {
  const [imageData, setImageData] = useState([]);

  const handleFileChange = (e, index) => {
    const files = e.target.files;
    const newImageData = [...imageData];

    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = (event) => {
        newImageData[index].file = event.target.result;
        setImageData(newImageData);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleNameChange = (e, index) => {
    const newImageData = [...imageData];
    newImageData[index].name = e.target.value;
    setImageData(newImageData);
  };

  const handleAddImage = () => {
    setImageData([...imageData, { name: '', file: '' }]);
  };

  const handleSave = () => {
    console.log(imageData);
    // You can perform further actions with the imageData array here
  };

  const handleRemove = (index) => {
    const updatedImageData = [...imageData];
    updatedImageData.splice(index, 1);
    setImageData(updatedImageData);
  };

  return (
    <div className="container mx-auto my-8 p-8 ">
      <h1 className="text-2xl font-bold mb-4">Image Uploader</h1>

      {imageData.map((item, index) => (
        <div key={index} className="mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, index)}
            className="mb-2"
          />
          <input
            type="text"
            placeholder="Image Name"
            value={item.name}
            onChange={(e) => handleNameChange(e, index)}
            className="w-1/2 p-2 border rounded-md"
          />
           <button
          type="button"
          onClick={() => handleRemove(index)}
          className="bg-red-500 text-white px-4 ml-5 py-2 rounded"
        >
          Remove
        </button>
        </div>
        
      ))}

      <button onClick={handleAddImage} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
        Add Image
      </button>

      <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded-md">
        Save
      </button>
    </div>
  );
};

export default Skills;
