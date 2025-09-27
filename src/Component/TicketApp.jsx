import React, { useState } from "react";
import TicketCard from "./TicketCard";
import TaskStatus from "./TaskStatus";

import Banner from "./Banner";

function TicketApp({ tickets }) {
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleCardClick = (ticket) => {
    if (!inProgress.find((t) => t.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
      alert(`Ticket "${ticket.title}" moved to In-Progress`);
    }
  };

  const handleComplete = (ticket) => {
    setResolved([...resolved, ticket]);
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    alert(`Ticket "${ticket.title}" marked as Resolved`);
  };

  return (
    <div className="p-6 grid grid-cols-3 gap-6">
      {/* Left Side */}
      <div className="col-span-2">
        <Banner inProgress={inProgress.length} resolved={resolved.length} />
        <div className="grid grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} onClick={handleCardClick} />
          ))}
        </div>
      </div>

      {/* Right Side */}
      <TaskStatus inProgress={inProgress} onComplete={handleComplete} />
    </div>
  );
}

export default TicketApp;
