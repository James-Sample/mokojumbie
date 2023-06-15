import React, { useState } from "react";

const ContactUs = () => {
  const initialState = {
    fields: {
      name: "",
      email: "",
      organisation: "",
      address1: "",
      address2: "",
      postcode: "",
      telephone: "",
      enquiry: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleFieldChange = (event) => {
    event.preventDefault();
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <div className="form-item">
          <label htmlFor="name">
            <input
              id="name"
              name="name"
              value={fields.name}
              onChange={handleFieldChange}
              placeholder="Name *"
            />
          </label>
        </div>
        <div className="form-item">
          <label htmlFor="email">
            <input
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
              placeholder="Email *"
            />
          </label>
        </div>
        <div className="form-item">
          <label htmlFor="organisation">
            <input
              id="organisation"
              name="organisation"
              value={fields.organisation}
              onChange={handleFieldChange}
              placeholder="Organisation"
            />
          </label>
        </div>
        <div className="form-item">
          <label htmlFor="address1">
            <input
              id="address1"
              name="address1"
              value={fields.address1}
              onChange={handleFieldChange}
              placeholder="Address (line 1)"
            />
          </label>
        </div>
        <div className="form-item">
          <label htmlFor="address2">
            <input
              id="address2"
              name="address2"
              value={fields.address2}
              onChange={handleFieldChange}
              placeholder="Address (line 2)"
            />
          </label>
        </div>
        <div className="form-item">
          <label htmlFor="postcode">
            <input
              id="postcode"
              name="postcode"
              value={fields.postcode}
              onChange={handleFieldChange}
              placeholder="Postcode"
            />
          </label>
        </div>
        <div className="form-item">
          <label htmlFor="telephone">
            <input
              id="telephone"
              name="telephone"
              value={fields.telephone}
              onChange={handleFieldChange}
              placeholder="Telephone"
            />
          </label>
        </div>
        <div className="form-item">
          <label htmlFor="enquiry">
            <input
              id="enquiry"
              name="enquiry"
              value={fields.enquiry}
              onChange={handleFieldChange}
              placeholder="Enquiry *"
            />
          </label>
        </div>
        <div className="form-item">
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
