import { useEffect, useState } from "react";
import AdminLayout from "../Layout";
import "./user.css";
import { Link } from "react-router-dom";

const UserList = () => {
  type Users = {
    id: number;
    username: string;
    email: string;
  };
  const [users, setUsers] = useState<Users[] | null>(null);

  const fetchData = () => {
    fetch("http://localhost:8080/api/user")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteUser = (id: number) => {
    fetch(`http://localhost:8080/api/user/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        fetchData();
      }
    });
  };

  return (
    <AdminLayout>
      <div className="container">
        <div className="table_container">
          <table>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
            {users?.map((li) => (
              <tr key={li.id}>
                <td>{li.id}</td>
                <td>{li.username}</td>
                <td>{li.email}</td>
                <td>
                  <div className="form_btn">
                    <button>
                      <Link to={"/usereditform/" + li.id}>Edit</Link>
                    </button>
                    <button
                      className="delete_btn"
                      onClick={() => deleteUser(li.id)}
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
export default UserList;
