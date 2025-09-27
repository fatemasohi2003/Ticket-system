import React from "react";
import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";

function Banner({ inProgress, resolved }) {
  return (
    <div
      className="cards-container"
      style={{ display: "flex", gap: 24, padding: 24 }}
    >
      {/* In-Progress */}
      <div
        className="card in-progress"
        style={{
          flex: 1,
          minHeight: 200,
          backgroundImage: `url(${vector1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center ",
        }}
      >
        <p className="font-semibold text-white">In Progress</p>
          <p className="text-xl font-bold text-white">{inProgress}</p>

      </div>

      {/* Resolved */}
      <div
        className="card resolved"
        style={{
          flex: 1,
          minHeight: 200,
          backgroundImage: `url(${vector1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center ",
        }}
      >
         <p className="font-semibold text-white">Resolved</p>
          <p className="text-xl font-bold text-white">{resolved}</p>

        
      </div>
    </div>

  );
}

export default Banner;
