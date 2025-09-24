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
import { serverUrl } from "@/src/data/severUrl";
import toast from "react-hot-toast";

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

///////////////////////////////////////////////send email for verification code///////////////////////////////////////////////////////
async function sendVerificationCode() {
  const res = await fetch(`${serverUrl}/emailForVerificationCode/`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ "email": email }),
  })
  const output = await res.json();
  console.log(output.ok);
  if(!(output.ok === "True")){
    toast.error("There is an error, please try again", {duration: 5000});
    return;
  }
  else{
    toast("A verification code has been sent to your email. Please check your email.", {duration: 5000});
    return;
  }  
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////send signUp info to backend///////////////////////////////////////////////////////
async function sendSignUpInfo(){
  if(username === ""){
    toast.error("username can not be empty, please enter your username", {duration: 5000});
    return;
  }
  if(verificationCode === ""){
    toast.error("verification code can not be empty, please enter the verification code we sent to your email", {duration: 5000});
    return;
  }
  if(email === ""){
    toast.error("email can not be empty, please enter your email", {duration: 5000});
    return;
  }
  if(password === ""){
    toast.error("password can not be empty, please enter your password", {duration: 5000});
    return;
  }
  const res = await fetch(`${serverUrl}/signUp`,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({"username": username, "email": email,  "verificationCode": verificationCode, "passwordPlainText": password}),
  })
  const output = await res.json();
  if(output.status === "incorrectVerificationCode"){
    toast.error("the verification code is incorrect, please try again", {duration: 5000});
    return;
  }
  if(output.status === "emailAlreadyExists"){
    toast.error("this email already exists, try signing in or use another email to sign up", {duration: 5000});
    return;
  }
  if(output.status === "signUpFailed"){
    toast.error("there is an error, signUpFailed , please try again", {duration: 5000});
    return;
  }
  if(output.status === "emailAlreadyExists"){
    toast.error("this email already exists, try signing in or use another email to sign up", {duration: 5000});
    return;
  }
  if(output.status === "usernameAlreadyExists"){
    toast.error("this username already exists, try using another username", {duration: 5000});
    return;
  }
  if(output.status === "SuccessfullySignedUp"){
    toast.success("you are signed up", {duration: 5000});
    return;
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function validateInputs() {
    if (!/[0-9]/.test(password)) {
      toast.error("invalid password, your password should have at least one number", {duration: 5000});
      return false;
    }
    if (password.includes(" ")) {
      toast.error("invalid password, your password should not include space in it", {duration: 5000});
      return false;
    }
    return true;
  }

  return (
    <main
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BG_IMAGE})` }}
    >
      
      {/* Title */}
      <div className="flex h-24 w-full items-center justify-center">
        {/* <h1 className="text-3xl font-bold tracking-widest text-white">Sign Up Page</h1> */}
        <img src={"/Event Master icon.png"} className="w-[250px] h-[50px] mr-[5px] mix-blend-multiply"/>
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
              className="mb-1 w-[70%] border-b-2 border-[#666] text-gray-800 text-[16px] outline-none focus:border-blue-600"
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button
              className="ml-2 w-[25%] h-[35px] bg-blue-600 text-white rounded-[5px] hover:bg-blue-700 cursor-pointer"
              onClick={() => {
                if(email === "" ){
                  toast.error("please enter a valid email address first", {duration: 5000});
                  return;
                }
                if(email.indexOf("@") === -1 || email.indexOf(".") === -1 || email.length < 5){
                  toast.error("please enter a valid email address first", {duration: 5000});
                  return;
                }
                else{
                  try{
                    sendVerificationCode();
                  }
                  catch(err){
                    console.error(err);
                    toast.error("Network error. Please try again.", {duration: 5000});
                    return;
                  }
                  return;
                }
              }}
            >
              Send
            </button>
          </div>

          {/* Sign Up Button */}
          <div className="mt-6 w-full text-center">
            <button
              id="sign_in_button_button"
              onClick={sendSignUpInfo}
              disabled={busy}
              className="h-10 w-full rounded-md bg-[#0066cc] text-[15px] font-bold text-white outline-0 focus:outline-dashed focus:outline-2 focus:outline-[#005bb5] disabled:opacity-60 hover:bg-blue-700 cursor-pointer transition duration-150"
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
