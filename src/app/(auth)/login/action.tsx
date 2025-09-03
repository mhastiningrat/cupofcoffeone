// app/login/actions.ts
"use server";

import { redirect } from "next/navigation";
type FormDatas = {
    username?:string;
    password?:string;
}

export async function login(formData: FormDatas) {
  const username = formData.username;
  const password = formData.password;

  // validasi login
  if (username === "admin" && password === "wikatjjadmin") {
    // ✅ redirect langsung dari server
    redirect("/dashboard");
  }

  throw new Error("Login gagal");
}
