import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Resume.css';

export default function Resume() {

    const [userData, setUserData] = useState({ name: "", email: "", message: "" });

    function handleInputChange(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    async function handleFormSubmit(e) {
        e.prevendDefault();
    }


    return (

        <div className='contact-card'>
            <h3>Contact Form</h3>
            <form className='contact-form' onSubmit={handleFormSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={userData.name} onChange={handleInputChange} />

                <label>Email Address</label>
                <input type="text" name="email" value={userData.email} onChange={handleInputChange} />

                <label>Password</label>
                <input type="text" name="message" value={userData.message} onChange={handleInputChange} />

                <label className='form-error-message'>Error</label>

                <button className="form-submit">Submit</button>
            </form>
        </div>

    )
}