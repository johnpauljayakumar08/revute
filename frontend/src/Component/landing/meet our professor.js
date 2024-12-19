import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './meet our professor.css'; // Assuming styles are moved here

const Mop = () => {
  return (
    <div>
      {/* Auto-scrolling title */}
      <div className="text-center">
        <h1>Meet Our Professor</h1>
      </div>

      {/* Professor Cards */}
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="professor-card">
              <img src="https://via.placeholder.com/150" alt="Professor 1" />
              <h4>Dr. John Doe</h4>
              <p>Head of Department</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="professor-card">
              <img src="https://via.placeholder.com/150" alt="Professor 2" />
              <h4>Dr. Jane Smith</h4>
              <p>Senior Lecturer</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="professor-card">
              <img src="https://via.placeholder.com/150" alt="Professor 3" />
              <h4>Dr. Alan Brown</h4>
              <p>Research Associate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mop;