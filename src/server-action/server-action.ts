"use server";
import { redirect } from "next/navigation";


export async function handleLoginForm(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");

  console.log({ username, password });
  // MAKE A REQUEST TO THE BACKEND TO AUTHENTICATE USER WITH THE DATA COLLECTED
  // GET USERID FROM THE BACKEND RESPONSE 
  // REDIRECT TO DASHBOARD 
  const userid = "123";
  redirect(`/dashboard/${userid}`);
}

