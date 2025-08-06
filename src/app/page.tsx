import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center font-bold text-2xl">
      <p>WELCOME TO THE HOME PAGE</p>
      <div className="px-3 rounded-[5px] bg-green-600 text-white">
        <Link href={"/login"}>log in</Link>
      </div>
    </div>
  );
}
