"use client";
import React, { useState, useEffect } from "react";

interface LetterProps {
  letter: string;
}

const Letter: React.FC<LetterProps> = ({ letter }) => {
  return <span>{letter}</span>;
};

export default Letter;
