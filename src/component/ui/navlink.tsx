import Link from "next/link";

const navlinks = [
  { name: "Dashboard", path: "/dashboard/123" },
  { name: "Investors", path: "/investors/123" },
  { name: "Plots", path: "/projects/123" },
  { name: "Wallet", path: "/wallet/123" },
  { name: "Agent Tracking", path: "/agent/123" },
  { name: "Reports", path: "/reports" },
  { name: "Audit Logs", path: "/audit" },
  { name: "Management", path: "/management" },
];

function NavLink() {
  return (
    <div className="border-2 border-pink-500 row-span-2 p-4 flex flex-col">
      <div className="mb-8 font-bold text-[20px]">Logo</div>
      {/* nav links */}
      <ul className="*:p-2 *:text-blue-500 *:underline">
        {navlinks.map((link) => (
          <li key={link.name}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      {/* LOG OUT */}
      <div className="flex-1 flex items-end font-bold underline">
        <p>LOG OUT</p>
      </div>
    </div>
  );
}

export default NavLink;
