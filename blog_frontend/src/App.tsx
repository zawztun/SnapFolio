import "./App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import AdminLayout from "./components/Layout";

export type Post = {
  title: string;
  body: string;
  id: number;
  description: string;
  photoUrl: string;
  createdOn: Date;
};

function App() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [recommended, setRecommended] = useState<Post | null>(null);
  const host = import.meta.env.VITE_HOST;
  const port = import.meta.env.VITE_PORT;
  useEffect(() => {
    fetch(`http://${host}:${port}/api/post`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, []);

  useEffect(() => {
    fetch(`http://${host}:${port}/api/post/recommended`)
      .then((res) => res.json())
      .then((recommended) => setRecommended(recommended));
  }, []);

  return (
    <AdminLayout>
      <>
        <div className="container">
          <div className="hero">
            <div className="hero_header">
              <h1 className="header_text">Blog</h1>

              <p className="header_description"></p>
            </div>
            <div className="hero_img">
              {recommended?.photoUrl ? (
                <img className="img" src={recommended?.photoUrl} />
              ) : (
                <img
                  className="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg"
                />
              )}
            </div>
          </div>
          <div className="hero_paragraph">
            <div>
              <h2>{recommended?.title}</h2>
            </div>
            <div>
              <p>{recommended?.body}</p>
            </div>
          </div>

          <div className="posts">
            {posts?.map((p) => (
              <div key={p.id} className="post">
                <Link to={`/post/${p.id}`}>
                  <div>
                    {p.photoUrl ? (
                      <img className="img" src={p.photoUrl} />
                    ) : (
                      <img
                        className="img"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg"
                      />
                    )}
                  </div>
                  <div>
                    <h2>{p.title}</h2>
                  </div>
                </Link>
                <div>
                  <h2>{p.description}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </AdminLayout>
  );
}

export default App;
