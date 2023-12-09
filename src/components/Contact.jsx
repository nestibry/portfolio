import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Resume.css';

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
    }

    return (

        <div className='contact-card'>
            <h3>Contact Form</h3>
            <form className='contact-form' onSubmit={handleFormSubmit}>
                <div className='form-fields'>
                    <label>Name</label>
                    <input type="text" name="name" value={userData.name} onChange={handleInputChange} />
                    <label>Email Address</label>
                    <input type="text" name="email" value={userData.email} onChange={handleInputChange} />
                    <label>Message</label>
                    <textarea type="text" name="message" value={userData.message} onChange={handleInputChange} />
                    <label>Error</label>
                </div>
                <div className='form-buttons'>
                    <button type="reset" onClick={handleReset}>Clear All</button>
                    <button>Submit</button>
                </div>
            </form>
        </div>

    )
}