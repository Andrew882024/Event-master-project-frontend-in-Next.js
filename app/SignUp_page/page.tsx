// const SignUp_page = () =>{
//   return(
//     <div className="abosolute top-0 left-0 w-screen h-screen bg-gray-200">
//       <div className="text-black text-5xl">SignUp_page</div>
//     </div>
// );
// }

// export default SignUp_page;

// app/sign-up/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Notes:
 * 1) Put your background image in /public/img/bg-signup.png (or change BG_IMAGE below).
 * 2) To configure the API base, set NEXT_PUBLIC_API_BASE in .env.local.
 */
const BG_IMAGE = "/UCSD_1.webp"; // place your image at public/img/bg-signup.png
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://18.223.126.55:8000";

export default function SignUp_page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [busy, setBusy] = useState(false);

  function validateInputs() {
    if (!/[0-9]/.test(password)) {
      alert("invalid password, your password should have at least one number");
      return false;
    }
    if (password.includes(" ")) {
      alert("invalid password, your password should not include space in it");
      return false;
    }
    return true;
  }

  async function handleSignUp() {
    if (!validateInputs()) return;

    try {
      setBusy(true);

      // 1) Check whether email exists
      const existRes = await fetch(
        `${API_BASE}/email_check_if_exist/${encodeURIComponent(email)}`
      );
      const existStatus = await existRes.json();

      if (existStatus === "exist") {
        alert("the email already exist, try something else");
        return;
      }
      if (existStatus !== "not_exist") {
        alert("there is an error");
        return;
      }

      // 2) Create user
      const createRes = await fetch(`${API_BASE}/get_email_and_password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!createRes.ok) {
        alert("there is an error");
        return;
      }

      alert("you are signed up");
      router.push("/sign-in");
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
      
      {/* Title */}
      <div className="flex h-24 w-full items-center justify-center">
        <h1 className="text-3xl font-bold tracking-widest text-white">Sign Up Page</h1>
      </div>

      {/* Sign-up section */}
      <section className="flex min-h-[70vh] w-full items-center justify-center">
        <div className="inline-block w-[400px] rounded-xl border-8 border-white bg-white p-4 shadow-lg">
          {/* Email & Password */}
          <div className="w-full bg-white">
            <label className="mb-1 block text-[16px] text-[#666]">Email</label>
            <input
              className="mb-2 w-[95%] border-b-2 border-[#666]  text-gray-800 text-[16px] outline-none focus:border-blue-600"
              id="user_name_id"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="mb-1 mt-2 block text-[16px] text-[#666]">Password</label>
            <input
              className="mb-1 w-[95%] border-b-2 border-[#666] text-gray-800 text-[16px] outline-none focus:border-blue-600"
              id="password_id"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className="mb-1 mt-2 block text-[16px] text-[#666]">Username</label>
            <input
              className="mb-1 w-[95%] border-b-2 border-[#666] text-gray-800 text-[16px] outline-none focus:border-blue-600"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label className="mb-1 mt-2 block text-[16px] text-[#666]">Verification code</label>
            <input
              className="mb-1 w-[95%] border-b-2 border-[#666] text-gray-800 text-[16px] outline-none focus:border-blue-600"
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </div>

          {/* Sign Up Button */}
          <div className="mt-6 w-full text-center">
            <button
              id="sign_in_button_button"
              onClick={handleSignUp}
              disabled={busy}
              className="h-10 w-full rounded-md bg-[#0066cc] text-[15px] font-bold text-white outline-0 focus:outline-dashed focus:outline-2 focus:outline-[#005bb5] disabled:opacity-60"
            >
              {busy ? "Signing Up..." : "Sign Up"}
            </button>

            <a
              id="go_back_id"
              href="/SignIn_page"
              className="mt-3 inline-block text-[#005bb5]"
            >
              go back
            </a>
          </div>
        </div>
      </section>

      {/* Spacer / contact area if you need it */}
      <div className="h-40 w-full" />
    </main>
  );
}
