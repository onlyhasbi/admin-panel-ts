import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal = (Component) => (props) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return ReactDOM.createPortal(
      <Component {...props} />,
      document.getElementById("portal")
    );
  }

  return null;
};

export default Portal;
