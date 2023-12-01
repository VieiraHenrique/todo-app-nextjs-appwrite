"use client";

import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/helpers/auth";

export default function RegisterPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [okToRedirect, setOkToRedirect] = useState(false);

  useEffect(() => {
    if (okToRedirect) {
      redirect("/");
    }
  }, [okToRedirect]);

  const signupUser = async (e) => {
    e.preventDefault();

    try {
      await auth.register(user.email, user.password, user.name);
      await auth.loginEmail(user.email, user.password);
      setOkToRedirect(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='p-10'>
      <h1 className='text-4xl font-bold mb-3'>Register</h1>
      <form onSubmit={(e) => signupUser(e)}>
        <input
          className='border-2 border-black block mb-3'
          type='text'
          placeholder='Name'
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          className='border-2 border-black block mb-3'
          type='text'
          placeholder='Email'
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          className='border-2 border-black block mb-3'
          type='password'
          placeholder='Password'
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button>Register</button>
      </form>
    </div>
  );
}
