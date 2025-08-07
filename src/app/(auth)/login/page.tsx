"use client"
// THIS WILL EXPORT THE LOGIN PAGE COMPONENT
import { handleLoginForm } from "@/src/server-action/server-action";


function Login() {
  
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form action={handleLoginForm} className="border-2 border-green-800 p-3 *:mb-2">
        {/* username */}
        <div className="border border-green-700">
          <label htmlFor="username" />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
          />
        </div>
        {/* password */}
        <div className="border border-green-700">
          <label htmlFor="password" />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="password"
          />
        </div>
        {/* login btn */}
        <button className="px-3 rounded-[5px] bg-green-600 cursor-pointer" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;


