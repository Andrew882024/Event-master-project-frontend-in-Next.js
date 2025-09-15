// const SignIn_page = () =>{
//   return(
//     <div className="abosolute top-0 left-0 w-screen h-screen bg-gray-200">
//       <div className="text-black text-5xl">SignIn_page</div>
//     </div>
// );
// }

// export default SignIn_page;

// app/sign-in/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * Notes:
 * 1) Put your background image in /public/img/bg.png (or any name) and update BG_IMAGE below if needed.
 * 2) If you prefer an env var, set NEXT_PUBLIC_API_BASE in .env.local and replace HTTP_LINK below.
 */
const BG_IMAGE = "/UCSD_1.webp"; // place your image at public/img/bg.png
const HTTP_LINK ="http://127.0.0.1:8000";

export default function SignIn_page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [busy, setBusy] = useState(false);

  const tryToSignIn = async () => {
    try{
      if (email === "") {
        alert("email can not be empty, please enter your email");
        return;
      }
      if (password === "") {
        alert("password can not be empty, please enter your password");
        return;
      }
      setBusy(true);
      // send to backend
      const res = await fetch(`${HTTP_LINK}/signIn/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, passwordPlainText: password }),
      });
      const output = await res.json();
      
      if (output.status === "emailAndPasswordDoesNotMatch") {
        alert("emailAndPasswordDoesNotMatch, please try again");
        return;
      }
      if (output.status === "SuccessfullySignedIn") {
        alert("you are signed in (Functionality not implemented)");
        //router.push("/");
        return;
      }
      if (output.status === "signInFailed") {
        alert("there is an error, signInFailed , please try again");
        return;
      }
      alert("you are signed in (Functionality not implemented)");
      console.log(output);
      // localStorage.setItem("user_id", output.user.user_id);
      // localStorage.setItem("user_name", output.user.username);
      // localStorage.setItem("user_email", output.user.email);
      // localStorage.setItem("access_token", output.access_token);
      // localStorage.setItem("user_role", output.user.roles);
      localStorage.setItem("JWT_access_token_Info", JSON.stringify(output));

      //output:{access_token, token_type, expires_in, user:{user_id, username, email, roles[]}}

      //console.log("test localStorage username"+localStorage.getItem("user_name"));
      return;
    }
    catch (error) {
      console.error("Error during sign-in:", error);
      alert("An error occurred during sign-in. Please try again later.");
    }
    finally {
      setBusy(false);
    }
  };


  return (
    <main
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
      <div className="absolute left-[10px] top-[10px] w-[150px] h-[40px] shadow-lg flex items-center justify-center text-gray-50 bg-blue-600 rounded-[5px] hover:bg-blue-700 transform duration-150 cursor-pointer" onClick={() => router.push("/")}>
        Go Back
      </div>
      {/* Title */}
      <div className="flex h-24 w-full items-center justify-center">
        <h1 className="text-3xl font-bold tracking-widest text-white">Sign In Page</h1>
      </div>

      {/* Sign-in section */}
      <section className="flex h-[70vh] w-full items-center justify-center">
        <div className="inline-block w-[400px] rounded-xl border-8 border-white bg-white p-4 shadow-lg">
          {/* Email & Password */}
          <div className="w-full bg-white">
            <label className="mb-1 block text-[16px] text-[#666]">Email</label>
            <input
              className="mb-2 w-[95%] border-b-2 border-[#666] text-gray-800 text-[16px] outline-none focus:border-blue-600"
              id="InputEmail"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="mb-1 mt-2 block text-[16px] text-[#666]">Password</label>
            <input
              className="mb-1 w-[95%] border-b-2 border-[#666] text-gray-800 text-[16px] outline-none focus:border-blue-600"
              id="InputPassword"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Remember me */}
          <div className="mt-3 flex items-center gap-2">
            <input
              id="my_remember_checkbox"
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="ml-2 scale-125"
            />
            <label htmlFor="my_remember_checkbox" className="ml-1 text-[#666]">
              Remember me
            </label>
          </div>

          {/* Sign In Button */}
          <div className="mt-4 w-full text-center">
            <button
              id="sign_in_button_button"
              onClick={tryToSignIn}
              disabled={busy}
              className="h-10 w-full rounded-md bg-[#0066cc] text-[15px] font-bold text-white outline-0 focus:outline-dashed focus:outline-2 focus:outline-[#005bb5] disabled:opacity-60 hover:bg-blue-700 cursor-pointer transition duration-150"
            >
              {busy ? "Signing In..." : "Sign In"}
            </button>
          </div>

          {/* Links */}
          <div className="mt-5">
            <a href="#" className="text-[#005bb5]">Forgot password?</a>
            <br />
            <a href="/SignUp_page" className="text-[#005bb5]">New here? Sign up now.</a>
          </div>
        </div>
      </section>

      {/* Spacer / contact area if you need it */}
      <div className="h-40 w-full" />
    </main>
  );
}
