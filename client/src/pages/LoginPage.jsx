import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  //? untuk navigasi
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  // form dan anchor supaya tidak refresh
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        method: "post",
        url: import.meta.env.VITE_BASE_URL + "/login",
        data: input, // data di axios = req.body
      });

      // setelah dapat access token, kita simpan
      localStorage.access_token = data.access_token;

      // navigasi ke home
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="login-section">
      <div className="container d-flex justify-content-center my-5">
        <div className="card p-3 w-50">
          <h4 className="text-center mb-3">Login</h4>

          <form onSubmit={handleSubmitForm} id="login-form">
            <label htmlFor="form-name" className="form-label">
              Email
            </label>
            <input
              onChange={handleChangeInput}
              id="form-email"
              name="email"
              type="email"
              placeholder="input email"
              className="form-control mb-3"
            />

            <label htmlFor="form-company" className="form-label">
              Password
            </label>
            <input
              onChange={handleChangeInput}
              id="form-password"
              name="password"
              type="text"
              placeholder="input password"
              className="form-control mb-3"
            />

            <button type="submit" className="btn btn-warning">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
