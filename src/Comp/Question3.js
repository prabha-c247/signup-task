import React from 'react';
import { useState } from 'react';
const Question3 = () => {
    // const [data, setData]=useState({
    //     fname:'',
    //     lname:'',
    //     email:'',
    //     city:'',
    //     contact:0,
    //     gender:''
    // })
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [contact, setContact] = useState(0);
    const [gender, setGender] = useState('');
    const [username, setUsername] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault()
        console.log(`FirstName: ${fname}, LastName: ${lname},Contact:${contact},Email: ${email},City: ${city}, Gender: ${gender}, UserName: ${username}`)
        setFname('');
        setLname('');
        setEmail('');
        setContact('');
        setGender('');
        setUsername('')
    }

    return (
        <div>

            <div className='auto'>
                <h4>Your Username:{username}</h4>
                FirstNmae:&nbsp; {fname} <br />LastName:&nbsp; {lname}<br />Contact:&nbsp;{contact}<br />Email:&nbsp;{email}<br />Gender:&nbsp;{gender}<br />City:&nbsp;{city}</div>
            <form onSubmit={handleSubmit}>
                <div className="App container">
                    <h5>Question 3</h5>
                    <h1>Sign Up</h1>
                    <div className='mb-3'>
                        <label>First Name</label>
                        <input value={fname} type="text" placeholder="Enter Name" name="fname" required onChange={(e) => { setFname(e.target.value) }} />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="lname"><b>Last Name</b></label>
                        <input value={lname} type="text" placeholder="Enter Last Name" name="lname" required onChange={(e) => { setLname(e.target.value) }} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email"><b>Email</b></label>
                        <input type="email" name="Enter Email" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="contact"><b>Contact</b></label>
                        <input value={contact} type="number" name="contact" required onChange={(e) => { setContact(e.target.value) }} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="city" ><b>Select City</b></label>
                        <select name="city" id="city" onChange={(e) => { setCity(e.target.value) }}>
                            <option value="">Select City</option>
                            <option value="Indore">Indore</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Pune">Pune</option>
                        </select>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="gender" ><b>Select Gender</b></label>
                        <input type="radio" name="gender" value='male' onChange={(e) => { setGender(e.target.value) }} />Male
                        <input type="radio" name="gender" value='female' onChange={(e) => { setGender(e.target.value) }} />Female
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="username"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="username" required value={username} onChange={(e) => { setUsername(e.target.value) }} />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                    </div>
                  
                    <div ><button type="submit">Sign Up</button></div>

                    {/* <span >Already have an account?</span> */}
                    {/* <div ><a href="#">Login</a></div> */}

                </div>
            </form>
        </div>
    )
}

export default Question3;