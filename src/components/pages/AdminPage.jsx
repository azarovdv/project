import React from 'react';
import axios from 'axios';

export default function AdminPage() {
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const response = await axios.post('/api/auth', formData);
    if (response.status === 200) {
      window.location.href = '/admin/edit';
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
