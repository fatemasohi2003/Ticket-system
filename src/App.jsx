import './App.css';
import vector1 from './assets/vector1.png';
import Banner from './Component/banner.jsx';
import TaskStatus from "./Component/TaskStatus.jsx";
import TicketApp from "./Component/TicketApp.jsx";
import TicketCard from "./Component/TicketCard.jsx";

function App() {
  const sampleTickets = [
    {
      id: 1,
      title: "Bug in login",
      description: "Login fails on mobile",
      customer: "John Doe",
      priority: "High",
      status: "In Progress",
      createdAt: "2025-09-27T10:00:00Z",
    },
    {
      id: 2,
      title: "UI improvement",
      description: "Improve dashboard colors",
      customer: "Jane Smith",
      priority: "Medium",
      status: "Resolved",
      createdAt: "2025-09-26T14:00:00Z",
    },
   
  {
    id: 3,
    title: "API error",
    description: "GET /users returns 500 error intermittently",
    customer: "Michael Johnson",
    priority: "High",
    status: "In Progress",
    createdAt: "2025-09-25T09:30:00Z",
  },
  {
    id: 4,
    title: "Password reset issue",
    description: "Reset link not working",
    customer: "Emily Davis",
    priority: "High",
    status: "Resolved",
    createdAt: "2025-09-24T16:45:00Z",
  },
  {
    id: 5,
    title: "Notification bug",
    description: "Email notifications delayed",
    customer: "William Brown",
    priority: "Medium",
    status: "In Progress",
    createdAt: "2025-09-23T11:15:00Z",
  },
  {
    id: 6,
    title: "Dashboard performance",
    description: "Dashboard loads slowly for large datasets",
    customer: "Sophia Wilson",
    priority: "Medium",
    status: "In Progress",
    createdAt: "2025-09-22T13:00:00Z",
  },
  {
    id: 7,
    title: "Report export",
    description: "Export to PDF generates empty file",
    customer: "James Taylor",
    priority: "High",
    status: "Resolved",
    createdAt: "2025-09-21T10:20:00Z",
  },
  {
    id: 8,
    title: "Search function",
    description: "Search returns incorrect results",
    customer: "Olivia Martinez",
    priority: "Medium",
    status: "In Progress",
    createdAt: "2025-09-20T15:40:00Z",
  },
  {
    id: 9,
    title: "Profile update",
    description: "Cannot change profile picture",
    customer: "Liam Anderson",
    priority: "Low",
    status: "Resolved",
    createdAt: "2025-09-19T12:10:00Z",
  },
  {
    id: 10,
    title: "Notifications settings",
    description: "Settings reset after logout",
    customer: "Ava Thomas",
    priority: "Low",
    status: "In Progress",
    createdAt: "2025-09-18T09:50:00Z",
  },
  {
    id: 11,
    title: "Billing error",
    description: "Invoice shows wrong amount",
    customer: "Ethan Jackson",
    priority: "High",
    status: "Resolved",
    createdAt: "2025-09-17T14:25:00Z",
  },
  {
    id: 12,
    title: "Session timeout",
    description: "User session expires too quickly",
    customer: "Isabella White",
    priority: "Medium",
    status: "In Progress",
    createdAt: "2025-09-16T10:30:00Z",
  },
  {
    id: 13,
    title: "Export CSV bug",
    description: "CSV download fails for large data",
    customer: "Alexander Harris",
    priority: "High",
    status: "Resolved",
    createdAt: "2025-09-15T11:45:00Z",
  },
  {
    id: 14,
    title: "Login page styling",
    description: "Page layout broken on mobile",
    customer: "Mia Martin",
    priority: "Low",
    status: "In Progress",
    createdAt: "2025-09-14T13:15:00Z",
  },
  {
    id: 15,
    title: "Password complexity",
    description: "Weak passwords allowed",
    customer: "Daniel Lee",
    priority: "Medium",
    status: "Resolved",
    createdAt: "2025-09-13T16:40:00Z",
  },
  {
    id: 16,
    title: "Notifications not showing",
    description: "In-app notifications missing",
    customer: "Charlotte Perez",
    priority: "Medium",
    status: "In Progress",
    createdAt: "2025-09-12T09:20:00Z",
  },
  {
    id: 17,
    title: "Search autocomplete",
    description: "Autocomplete suggestions incorrect",
    customer: "Matthew Thompson",
    priority: "Low",
    status: "Resolved",
    createdAt: "2025-09-11T14:55:00Z",
  },
  {
    id: 18,
    title: "File upload",
    description: "Upload fails for large files",
    customer: "Amelia Garcia",
    priority: "High",
    status: "In Progress",
    createdAt: "2025-09-10T12:05:00Z",
  },
  {
    id: 19,
    title: "UI alignment issue",
    description: "Buttons misaligned on tablet",
    customer: "Benjamin Clark",
    priority: "Low",
    status: "Resolved",
    createdAt: "2025-09-09T15:30:00Z",
  },
  {
    id: 20,
    title: "Password reset email",
    description: "Email not received after request",
    customer: "Harper Lewis",
    priority: "High",
    status: "In Progress",
    createdAt: "2025-09-08T10:10:00Z",
  },
  ];

  const handleTicketClick = (ticket) => {
    alert(`Clicked on: ${ticket.title}`);
  };

  return (
    <>
    
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>FQA</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
            <li>
              <details>
                <summary className="bg-[#422AD5] rounded-t-none p-2 font-bold text-white">
                  + New ticket
                </summary>
              </details>
            </li>
          </ul>
        </div>
      </div>

     

  
      <TicketApp tickets={sampleTickets} />

  
      <footer className="bg-black text-gray-300 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 border-b border-gray-700 pb-8">
          <div className="flex-1">
            <h2 className="text-white text-lg font-bold">CS — Ticket System</h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          <div className="flex-1">
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our Mission</a></li>
              <li><a href="#" className="hover:text-white">Contact Sales</a></li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-white font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Products & Services</a></li>
              <li><a href="#" className="hover:text-white">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white">Download Apps</a></li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-white font-semibold mb-3">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Join Us</a></li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-white font-semibold mb-3">Social Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="flex items-center ga
p-2 hover:text-white">🌐 @CS — Ticket System</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-white">💼 @CS — Ticket System</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-white">📘 @CS — Ticket System</a></li>
              <li><a href="mailto:support@cst.com" className="flex items-center gap-2 hover:text-white">✉ support@cst.com</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-6">
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;