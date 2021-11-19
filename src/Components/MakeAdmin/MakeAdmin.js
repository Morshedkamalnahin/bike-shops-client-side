import React, { useState } from "react";
import { Container } from "react-bootstrap";
import swal from "sweetalert";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
  const user = {email}

    fetch('https://mysterious-temple-52045.herokuapp.com/users/admin', {
      method: "PUT", 
      headers: {
        "content-type": "application/json",
      },
      body : JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal("Admin added Successfully", "", "success");
        }
        e.target.reset();
        
      });
        e.preventDefault();
  };

  return (
    <div>
      <Container>
        <div className="form-area">
          <h2 className="text-center mb-4 fw-bold mt-3" style={{ color: "#3498db" }}>
            Make an Admin
          </h2>
          <form onSubmit={handleSubmit}>
            <input
            className='w-50 py-1 px-2'
              type="email"
              name="email"
              onBlur={handleBlur}
              placeholder="Enter Admin Email"
              required
            />
            <button type="submit" className="btn-now mt-2 py-1 px-4">
              Make Admin
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default MakeAdmin;
