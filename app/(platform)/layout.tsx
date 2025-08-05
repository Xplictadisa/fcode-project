// THIS WILL EXPORT A LAYOUT THAT WILL BE SHARED ACROSS AGENT, DASHBOARD, INVESTORS, PROJECTS AND WALLET PAGES

// THIS LAYOUT WILL HAVE THE NAVLINKS COMPONENT AND THE PROFILE HEADER COMPONENT
// EXAMPLE BELOW

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* NAVLINKS */}
      {/* PROFILE HEADER --- JOHN DOE */}
      <div>PLATFORM LAYOUT</div>
      {children}
    </>
  );
}

export default Layout