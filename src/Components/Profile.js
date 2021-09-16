import React, { useEffect, useState } from 'react';
import './Profile.css';
import axios from 'axios';

const Profile = () => {
    const [profileName, setProfileName] = useState("");
    const [profileCell, setProfileCell] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [profileEmail, setProfileEmail] = useState("");


    const profileData = async () => {
        try {
            const res = await axios.get("https://randomuser.me/api/");
            setProfileImage(res.data.results[0].picture.large);
            setProfileEmail(res.data.results[0].email);
            setProfileCell(res.data.results[0].cell);
            setProfileName(`${res.data.results[0].name.title} ${res.data.results[0].name.first} ${res.data.results[0].name.last}`);
        }
        catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        profileData();
    }, []);
   

    return (
        <>
           
            <div className="card">
          
                <img src={profileImage} style={{ width: '350px' }} />
                <h4>{profileName}</h4>
                <p className="title">{profileEmail}</p>
                <p>{profileCell}</p>
                <p>
                    <button onClick={() => profileData()} className="btn btn-outline-primary">New Person</button>
                </p>

            </div>
        </>

    )
}
export default Profile;