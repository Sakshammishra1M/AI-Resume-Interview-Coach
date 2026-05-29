import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);

  const uploadResume = async () => {
    if (!file) {
      alert("Please select a PDF first");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await axios.post(
  "http://localhost:5000/api/upload-resume",
  formData
);

      console.log(response.data);

      alert("Resume Uploaded Successfully");
    } catch (error) {
      console.log(error);
      alert("Upload Failed");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>AI Resume Interview Coach</h1>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br />
      <br />

      <button onClick={uploadResume}>
        Upload Resume
      </button>
    </div>
  );
}

export default App;