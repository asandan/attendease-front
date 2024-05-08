import { Button } from "@/components/ui";
import { withSession } from "@/shared";
import axios from "axios";
import { useState } from "react";

const pic = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABbElEQVR42mNk"

export default function Dashboard() {
  const [file, setFile] = useState(null);
  const [dto, setDto] = useState({});

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleDtoChange = (e: any) => {
    setDto({ ...dto, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!file) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("userId", "5");
    formData.append("description", "This is a test description");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/medical-certification`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Image uploaded:", response.data);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="justify-center items-center">
      <input type="file" onChange={handleFileChange} accept="image/*" />
      <Button type="submit">Upload</Button>
      <img src={`data:image/jpeg;base64,${pic}`} alt="Encoded Image" />
    </form>
  );
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  return { props: {} };
});

