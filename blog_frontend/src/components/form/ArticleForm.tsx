import React, { useState } from "react";
import AdminLayout from "../Layout";

export default function ArticleForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const inputHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      title: title,
      description: description,
      photoUrl: photoUrl,
      body: body,
    };

    await fetch("http://localhost:8080/api/post", {
      method: "POST",
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
            <div>
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
            <div>
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
