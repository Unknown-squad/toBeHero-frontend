import { useState } from "react";

const useNavbar = (initialCount = false) => {
  const [showMobileMenu, setshowMobileMenu] = useState(initialCount);
  const onClick = () => setshowMobileMenu(!showMobileMenu);

  return [showMobileMenu, onClick];
};

export default useNavbar;
