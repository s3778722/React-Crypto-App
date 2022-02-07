import React, { useState} from "react";
import HashLoader from "react-spinners/HashLoader";

const Spinner = () => {
  const [loading] = useState(true);


  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh", width: "100%" }}
      >
        {loading && (
          <div>
            <HashLoader
              size={40}
              color={"#36D7B7"}
              loading={loading}
              speedMultiplier={1.5}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Spinner;
