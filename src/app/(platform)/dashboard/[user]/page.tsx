// THIS WILL EXPORT THE DASHBOARD PAGE COMPONENT WHOSE CONTENT IS DYNAMIC TO EACH USERS
// route @ /dashboard/user
// a dynamic route, user is dynamic

function Dashboard() {
  return (
    <div className="h-full overflow-hidden">
      <div className="border-2 border-black p-2 flex justify-between items-center">
        {/* welcome header */}
        <div>
          <p>Dashboard</p>
          <p>Hi John 👋, here’s whats happening today</p>
        </div>
        <div>
          {/* INPUT FIELD COMPONENT HERE */}
          <div className="border-2 border-black text-center">
            search input and date
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
