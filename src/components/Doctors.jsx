
import React, { useContext} from "react";

import { Context } from "../index.js";
import { Navigate } from "react-router-dom";

const Doctors = () => {
  const { doctors } =useContext(Context);
  const { isAuthenticated } = useContext(Context);
 

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <section className="page doctors">
      <h1>DOCTORS </h1>
      <div className="banner">
      {console.log(doctors)}
        {doctors && doctors.length > 0 ? (
          doctors.map((element) => {
            return (
              <div className="card">
                <img
                  src={element.docAvatar && element.docAvatar.url}
                  alt="doctor avatar"
                />
                <h4>{`${element.firstname} ${element.lastname}`}</h4>
                <div className="details">
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    DOB: <span>{element.dob.substring(0, 10)}</span>
                  </p>
                  <p>
                    Department: <span>{element.doctorDepartment}</span>
                  </p>
                  <p>
                    NIC: <span>{element.nic}</span>
                  </p>
                  <p>
                    Gender: <span>{element.gender}</span>
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <h1>No Registered Doctors Found!</h1>
        )}
      </div>
    </section>
  );
};

export default Doctors;
