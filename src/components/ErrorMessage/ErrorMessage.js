import React from "react";
import "./ErrorMessage.scss";
const ErrorMessage = ({ children }) => {
  return (
    <div className="alert">
      <p className="danger">{children}</p>
    </div>
  );
};

export default ErrorMessage;

// const [click, setClicked] = useState(false);
// const onClick = () => setClicked(true);

// return (
//   <div className="alert" style={click ? { display: "none" } : {}}>
//     <span className="closebtn" onClick={onClick}>
//       &times;
//     </span>
//     <p>
//       <strong>Error:</strong> {children}
//     </p>
//   </div>
// );
// };
