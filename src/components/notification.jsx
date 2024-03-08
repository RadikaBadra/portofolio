"use client";
export default function Notification(props) {
  const { color, position = "bottom-8 right-14", children } = props;

  return (
    <>
      <div className={`${color} ${position} rounded absolute px-6 py-2`}>
        {children}
      </div>
    </>
  );
}
