import React from 'react';

const TaskStatus = ({ inProgress, onComplete }) => {
    return (
        <div>
             <h2 className="text-xl font-bold mb-4">Task Status</h2>
      {inProgress.length === 0 && (
        <p className="text-gray-500">No tasks in progress</p>
      )}
      {inProgress.map((ticket) => (
        <div
          key={ticket.id}
          className="border rounded-lg p-4 mb-3 shadow bg-yellow-50"
        >
          <h3 className="font-bold">{ticket.title}</h3>
          <button
            className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => onComplete(ticket)}
          >
            Complete
          </button>
        </div>
      ))}
        </div>
    );
};


export default TaskStatus;