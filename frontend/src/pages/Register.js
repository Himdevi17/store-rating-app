import React, { useState } from "react";
import { API } from "../services/api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", address: "", role: "USER" });

  const handleSubmit = async () => {
    try {
      await API.post("/auth/register", form);
      alert("Registered!");
    } catch {
      alert("Failed to register.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <input placeholder="Address" onChange={(e) => setForm({ ...form, address: e.target.value })} />
      <select onChange={(e) => setForm({ ...form, role: e.target.value })}>
        <option value="USER">User</option>
        <option value="OWNER">Store Owner</option>
        <option value="ADMIN">Admin</option>
      </select>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
