// THIS WILL EXPORT A LAYOUT THAT WILL BE SHARED ACROSS AGENT, DASHBOARD, INVESTORS, PROJECTS AND WALLET PAGES

// THIS LAYOUT WILL HAVE THE NAVLINKS COMPONENT AND THE PROFILE HEADER COMPONENT
// EXAMPLE BELOW
import NavLink from "@/src/component/ui/navlink";
import User from "@/src/component/ui/user";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen  grid grid-cols-[minmax(200px,300px)_1fr] grid-rows-[8vh_92vh]">
      <NavLink />
      <User />
      <div className="border-2 border-blue-600">{children}</div>
    </div>
  );
}

export default Layout;
