"use client";

import { account } from "@/appwrite.js/config";
import React, { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    console.log(account);
  }, []);

  return <div>HomePage</div>;
}
