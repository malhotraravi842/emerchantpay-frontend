import { useEffect } from "react";

const Pending = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location =
        "http://localhost:4000/wallet/deposits/?txnId=1235&txnStatus=success";
    }, [5000]);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return <div>Hello from pending</div>;
};

export default Pending;
