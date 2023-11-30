import { useEffect, useState } from "react";
import AdminLayout from "../Layout";
import "./Article.css";
import { Link } from "react-router-dom";

type Article = {
  id: number;
  title: string;
  description: string;
};

const ArticleList = () => {
  const [article, setArticle] = useState<Article[] | null>(null);
    const host = import.meta.env.VITE_HOST;
    const port = import.meta.env.VITE_PORT;

  function fetchData() {
    fetch(`http://${host}:${port}/api/post`)
      .then((res) => res.json())
      .then((article) => setArticle(article));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function deletePost(id: number) {
    fetch(`http://${host}:${port}/api/post/`+ id, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        fetchData();
      }
    });
  }

  return (
    <AdminLayout>
      <div className="container">
        <div className="table_container">
          <table>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th></th>
            </tr>
            {article?.map((list) => (
              <tr key={list.id}>
                <td>{list.id}</td>
                <td>{list.title}</td>
                <td>{list.description}</td>
                <td>
                  <div className="form_btn">
                    <button>
                      <Link to={"/articleeditform/" + list.id}>Edit</Link>
                    </button>

                    <button
                      className="delete_btn"
                      onClick={() => deletePost(list.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};
export default ArticleList;
