import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.8334118812795!2d174.7782065307638!3d-41.29072993343199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afd74d68d8f9%3A0x16edb20935697300!2sDirty%20Little%20Secret!5e0!3m2!1sen!2snz!4v1578453165808!5m2!1sen!2snz"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen=""
      ></iframe>
        <div className="location_tag">
            <div>Location</div>

        </div>

    </div>
  );
};

export default Location;
