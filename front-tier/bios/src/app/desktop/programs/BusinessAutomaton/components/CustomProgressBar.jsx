import { getRandomBetween } from '@/lib/utility/utility';
import { ProgressBar } from '@react95/core';
import React, { useEffect, useState } from 'react'

export default function CustomProgressBar(time_in_hours, setComplete) {

  const [progress, setProgress] = useState(0);
  
  var time_in_hours = getRandomBetween(0, 10);
  var speed = 100;

  useEffect(() => {
      setTimeout(() => {
        if (progress === 100) {
          setComplete();  
        } else{
          setProgress(progress + 1);
        }
      }, time_in_hours * speed);
  });
  
  return (
    <>
        <ProgressBar className="progressbar" percent={progress} />
    </>
  )
}
