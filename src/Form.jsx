import React, { useState } from 'react'

function Form() {
  const [form,setForm] = useState()
  return (
    <>
  <div className="container">
    <form className="forms">
      <div className="section">
        <input type="text" name="uname" placeholder="username" />
      </div>
      <div className="section">
        <input type="email" name="uname" placeholder="email" />
      </div>
      <div className="section">
        <input type="text" name="uname" placeholder="adress" />
      </div>
      <div>
        <button onClick={alert()} type="submit">login</button>
      </div>
    </form>
  </div>
</>
  )
}