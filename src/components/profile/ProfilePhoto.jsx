import React from "react";
import MyProfile from "./MyProfile.jpg";

const ProfilePhoto = () => {
  return (
    <div>
      <img
        style={{
          borderRadius: "170px",
          width: "150px",
          height: "110px",
          marginTop: "50px",
          marginLeft:"50%",
          
        }}
        src={MyProfile}
        alt="photoDeProfile"
      />
    </div>
  );
};

export default ProfilePhoto;
