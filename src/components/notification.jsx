"use client";
import { useState, useEffect } from "react";
export default function Notification(props) {
  const { color, position = "bottom-8 right-14", children } = props;
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, [show]);

  if (!show) return null;

  return (
    <>
      <div className={`${color} ${position} rounded absolute px-6 py-2`}>
        {children}
      </div>
    </>
  );
}
