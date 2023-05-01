import { useEffect } from "react";

const Pending = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location =
        "https://curious-caramel-22e442.netlify.app/success.html";
    }, [5000]);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return <div>Hello from pending</div>;
};

export default Pending;
