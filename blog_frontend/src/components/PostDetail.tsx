import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import "../App.css";

type Post = {
  id: number;
  title: string;
  body: string;
  description: string;
  photoUrl: string;
  createdOn: string;
};

function PostDetail() {
  const [detailPost, setDetailPost] = useState<Post>();

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/post/${id}`)
      .then((res) => res.json())
      .then((detailPost) => setDetailPost(detailPost));
  }, []);

  console.log(detailPost, "detail pages");
  console.log(id);
  return (
    <div className="container post_detail">
      <div className="hero">
        <div className="hero_header">
          <Link to="/">
            <h1 className="header_text">Blog</h1>
          </Link>
          <p className="header_description">
            A statically generated blog example using Next.js and WordPress.
          </p>
        </div>

        <div className="hero_img">
          <img className="img" src={detailPost?.photoUrl} />
        </div>
        <div className="header_description">
          <h1>{detailPost?.title}</h1>
          <p>{detailPost && new Date(detailPost.createdOn).toDateString()}</p>
        </div>
        <div className="post_body_paragraph">
          <p>{detailPost?.body}</p>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
