import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddPage() {
  const [inputForm, setInputForm] = useState({
    name: "",
    company: "",
    imgUrl: "",
  });

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value, //biar dinamis
    });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await axios.post(
        import.meta.env.VITE_BASE_URL + "/girlgroups",
        inputForm,
        {
          headers: {
            Authorization: "Bearer " + localStorage.access_token,
          },
        }
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="add-section">
      <div className="container d-flex justify-content-center my-5">
        <div className="card p-3 w-50">
          <h4 className="text-center mb-3">Add New Group</h4>

          <form onSubmit={handleSubmitForm} id="add-form">
            <label htmlFor="form-name" className="form-label">
              Name
            </label>
            <input
              onChange={handleChangeInput}
              id="form-name"
              type="text"
              placeholder="input name"
              className="form-control mb-3"
              name="name"
            />

            <label htmlFor="form-company" className="form-label">
              Company
            </label>
            <input
              onChange={handleChangeInput}
              id="form-company"
              type="text"
              placeholder="input company"
              className="form-control mb-3"
              name="company"
            />

            <label htmlFor="form-imgUrl" className="form-label">
              ImageUrl
            </label>
            <input
              onChange={handleChangeInput}
              id="form-imgUrl"
              type="text"
              placeholder="input image url"
              className="form-control mb-3"
              name="imgUrl"
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
