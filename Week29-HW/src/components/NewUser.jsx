import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function NewUser() {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [registeredUser, setRegisteredUser] = useState(null)

  const nameValidation = /^[A-Za-zА-Яа-яЁёҰұҮүҚқҒғӨөҺһІіӘә\s'-]+$/
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const usernameValidation = /^[a-zA-Z0-9]+$/
  const phoneValidation = /^\d{11}$/
  const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/

  const validate = () => {
    if (!nameValidation.test(name)) {
      setMessage('Name should contain only letters and spaces')
      return false
    }
    if (!emailValidation.test(email)) {
      setMessage('Invalid email')
      return false
    }
    if (!usernameValidation.test(username)) {
      setMessage('Username should contain only letters and numbers')
      return false
    }
    if (!phoneValidation.test(phone)) {
      setMessage('Invalid phone number')
      return false
    }
    if (!passwordValidation.test(password)) {
      setMessage('Password should contain at least 8 characters, including uppercase, lowercase, number, and special character')
      return false
    }
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
      return false
    }
    setMessage('')
    return true
  }

  const fetchData = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
        name,
        email,
        username,
        phone,
        password
      })
      console.log(response.data)
      setId(response.data.id)
      // alert('User registered successfully')
      setRegisteredUser({ id: response.data.id, name, email, username, phone })

      
      setName('')
      setEmail('')
      setUsername('')
      setPhone('')
      setPassword('')
      setConfirmPassword('')
    } catch (error) {
      console.log(error)
      alert('Error registering user')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      fetchData()
    }
  }

  useEffect(() => {
    console.log('NewUser component mounted')
    return () => {
      console.log('NewUser component unmounted')
    }
  }, [])

  return (
    <div className='form'>
    
    <div>
      <h1>Register New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        {message && <p style={{ color: 'red' }}>{message} </p>}
        {registeredUser && <p style={{ color: 'green' }}>User registered successfully!</p>}
        <button type="submit">Register</button>
      </form>

      {registeredUser && (
        <div className='pikir'>
          <h3>Registered User Details</h3>
          <p>ID: {registeredUser.id}</p>
          <p>Name: {registeredUser.name}</p>
          <p>Email: {registeredUser.email}</p>
          <p>Username: {registeredUser.username}</p>
          <p>Phone: {registeredUser.phone}</p>
        </div>
      )}
      
    </div>
   
    </div>
  )
}
