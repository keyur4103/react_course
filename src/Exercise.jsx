import React, { useState } from "react";

const Exercise = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    branch: [],
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedBranches = [...formData.branch];
      if (checked) {
        updatedBranches = [...updatedBranches, value];
      } else {
        updatedBranches = updatedBranches.filter((branch) => branch !== value);
      }
      setFormData({ ...formData, [name]: updatedBranches });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (you can log the form data for now)
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              checked={formData.gender === "Male"}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              checked={formData.gender === "Female"}
            />
            Female
          </label>
        </label>
        <br />
        <label>
          Branch:
          <label>
            <input
              type="checkbox"
              name="branch"
              value="Computer Science"
              onChange={handleChange}
              checked={formData.branch.includes("Computer Science")}
            />
            Computer Science
          </label>
          <label>
            <input
              type="checkbox"
              name="branch"
              value="Electrical Engineering"
              onChange={handleChange}
              checked={formData.branch.includes("Electrical Engineering")}
            />
            Electrical Engineering
          </label>
          <label>
            <input
              type="checkbox"
              name="branch"
              value="Mechanical Engineering"
              onChange={handleChange}
              checked={formData.branch.includes("Mechanical Engineering")}
            />
            Mechanical Engineering
          </label>
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </label>
        <br />
      </form>

      <h2>Registration Information:</h2>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{formData.name}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>{formData.age}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{formData.gender}</td>
          </tr>
          <tr>
            <td>Branch:</td>
            <td>{formData.branch.join(", ")}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{formData.email}</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>{formData.address}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Exercise;
