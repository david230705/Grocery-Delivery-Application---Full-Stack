import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{textAlign:"center", padding:"40px"}}>
      <h2>Scan the QR to Pay</h2>

      <img 
        src="/qr.jpg"
        alt="QR Code"
        style={{width:"250px", margin:"20px 0"}}
      />

      <br/>
      <button
        onClick={() => navigate("/")}
        style={{
          padding:"10px 20px",
          background:"red",
          color:"white",
          border:"none",
          borderRadius:"5px",
          cursor:"pointer",
          marginTop:"20px"
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default PaymentPage;
