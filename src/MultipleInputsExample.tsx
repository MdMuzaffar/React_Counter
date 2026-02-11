import { useState } from "react";

export const MUltipleInputsExample = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Fist Name"
        ></input>
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        ></input>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
        ></input>
      </div>
      <div>
        <h3>
          name : {formData.firstName}
          {formData.lastName}
        </h3>
        <h3>email: {formData.email}</h3>
      </div>
    </>
  );
};
