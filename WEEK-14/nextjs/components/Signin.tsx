"use client";
import Link from "next/link";
import { useState } from "react";
const Signin = () => {
  const [data,set]=useState()
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>button
          <div className="px-10">
            <div className="text-3xl font-extrabold">Sign in</div>
          </div>
          <div className="pt-2">
            <LabelledInput label="Username" placeholder="...@gmail.com" />
            <LabelledInput
              label="Password"
              type={"password"}
              placeholder="******"
            />
            <button
              onClick={() => console.log("vishnu")}
              type="button"
              className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Sign in
            </button>
          </div>
          <Link href="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">
        {label}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Signin;
