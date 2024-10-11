import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login(event) {
    event.preventDefault();
    const auth = {
      email,
      password,
    };
    const encoded = btoa(email + ":" + password);
    console.log(encoded);
    fetch(import.meta.env.VITE_BACKEND + "/api/v1/legender_battle/auth/login", {
      method: "POST",
      headers: {
        Authorization: "Basic " + encoded,
      },
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("Error");
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
        navigate("/userhome");
      });
  
  }
    
    
  return (
    <>
      <Navbar />
      <section className=" flex justify-center items-center absolute inset-0">
        <div className=" bg-white bg-opacity-75 p-6 rounded-lg shadow-md w-96">
          <form
          onSubmit={login}
          >
            <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                placeholder="Password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 rounded mb-5"
            >
              Enter
            </button>
          </form>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-orange-600 text-white font-bold py-2 rounded">
              <Link to="/login">Log In</Link>
            </button>

            <button className=" bg-orange-100  text-white font-bold py-2 rounded">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
