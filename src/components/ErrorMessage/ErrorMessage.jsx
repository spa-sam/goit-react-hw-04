import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function ErrorMessage({ message }) {
  //   console.log(message);
  useEffect(() => {
    if (message) {
      toast(message);
    }
  }, [message]);

  return (
    <div>
      <Toaster />
    </div>
  );
}

export default ErrorMessage;
