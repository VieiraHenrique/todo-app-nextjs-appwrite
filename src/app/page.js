"use client";

import React, { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    console.log("test");
  }, []);

  return <div>HomePage</div>;
}
