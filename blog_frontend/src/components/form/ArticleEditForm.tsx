import React, { useEffect, useState } from "react";
import AdminLayout from "../Layout";
import { useParams } from "react-router-dom";

export default function EditForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/post/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setBody(res.body);
        setTitle(res.title);
        setDescription(res.description);
        setPhotoUrl(res.photoUrl);
      });
  }, []);

  const inputHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      title: title,
      description: description,
      photoUrl: photoUrl,
      body: body,
    };

    await fetch(`http://localhost:8080/api/post/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setTitle("");
    setDescription("");
    setBody("");
    setPhotoUrl("");
  };

  return (
    <AdminLayout>
      <div className="container">
        <div className="form_container">
          <form onSubmit={inputHandler} className="form">
            <div className="form_field">
              <input
                type="text"
                placeholder="Enter Your Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="form_field">
              <input
                type="text"
                placeholder="Enter Your Description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div>
              <textarea
                rows={4}
                cols={40}
                placeholder="Enter Your post "
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
            </div>
            <div className="form_field">
              <input
                type="text"
                placeholder="Enter Your photoUrl "
                value={photoUrl}
                onChange={(e) => {
                  setPhotoUrl(e.target.value);
                }}
              />
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
