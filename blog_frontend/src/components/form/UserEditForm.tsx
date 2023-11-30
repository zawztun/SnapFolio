import React, { useEffect, useState } from "react";
import AdminLayout from "../Layout";
import { useParams } from "react-router-dom";

export default function UserEditForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/user/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.username);
        setUsername(res.username);
        setEmail(res.email);
        setPassword(res.password);
      });
  }, []);

  const onChangeHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      username: username,
      email: email,
      password: password,
    };

    await fetch(`http://localhost:8080/api/user/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <AdminLayout>
      <div className="container">
        <div className="form_container">
          <form className="form" onSubmit={onChangeHandler}>
            <div className="form_field">
              <input
                type="text"
                placeholder="Enter Your Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form_field">
              <input
                type="email"
                placeholder=" Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form_field">
              <input
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
