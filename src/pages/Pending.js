import { useEffect } from "react";

const Pending = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location = "https://www.lcx.com/";
    }, [5000]);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return <div>Hello from pending</div>;
};

export default Pending;
