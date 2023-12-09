import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Contact.css';

export default function Resume() {

    const [userData, setUserData] = useState({ name: "", email: "", message: "" });

    function handleInputChange(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    function handleReset() {
        setUserData({ ...userData, name: "", email: "", message: "" });
    }

    async function handleFormSubmit(e) {
        e.preventDefault();
        console.log(userData);
        handleReset();
    }

    return (

        <div className='contact-card'>
            <h3>Contact Form</h3>
            <form className='contact-form' onSubmit={handleFormSubmit}>
                <div className='form-fields'>
                    <label>Name</label>
                    <input type="text" name="name" value={userData.name} onChange={handleInputChange} required />
                    <label>Email Address</label>
                    <input type="email" name="email" value={userData.email} onChange={handleInputChange} required />
                    <label>Message</label>
                    <textarea type="text" name="message" rows="4" value={userData.message} onChange={handleInputChange} required />
                </div>
                <div className='form-buttons'>
                    <button type="reset" onClick={handleReset}>Clear All</button>
                    <button>Submit</button>
                </div>
            </form>
        </div>

    )
}