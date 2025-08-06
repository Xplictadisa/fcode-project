// THIS WILL EXPORT A LAYOUT THAT WILL BE SHARED ACROSS AGENT, DASHBOARD, INVESTORS, PROJECTS AND WALLET PAGES

// THIS LAYOUT WILL HAVE THE NAVLINKS COMPONENT AND THE PROFILE HEADER COMPONENT
// EXAMPLE BELOW
import NavLink from "@/src/component/ui/navlink";
import User from "@/src/component/ui/user";


function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen grid grid-cols-[minmax(200px,400px)_1fr] grid-rows-[50px_1fr] gap-2">
      <NavLink />
      <User />
      <div className="">{children}</div>
    </div>
  );
}

export default Layout;