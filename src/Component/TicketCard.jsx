import React from 'react';

function TicketCard({ ticket, onClick }) {
  return (
    <div
      className="border rounded-lg p-4 shadow cursor-pointer hover:bg-gray-50"
      onClick={() => onClick(ticket)}
    >
      <h3 className="font-bold text-lg">{ticket.title}</h3>
      <p className="text-sm text-gray-600">{ticket.description}</p>
      <p className="text-xs mt-1">Customer: {ticket.customer}</p>
      <p className="text-xs">Priority: {ticket.priority}</p>
      <p className="text-xs">Status: {ticket.status}</p>
      <p className="text-xs text-gray-500">
        Created: {new Date(ticket.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};
export default TicketCard;




