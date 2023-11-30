import React, { useState } from "react";
import AdminLayout from "../Layout";

export default function UserForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      username: username,
      email: email,
      password: password,
    };

    await fetch("http://localhost:8080/api/user", {
      method: "POST",
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
