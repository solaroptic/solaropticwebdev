import React from "react";
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();

  return (
    <Html as="div" center>
      <p style={{ fontSize: 14, color: "white", fontWeight: 800 }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
}
