import Image from "next/image";
import React from "react";
import logo from "@/Images/icons/logo.png";

const LogoSmall = () => {
  return <Image src={logo} width={100} height={100} alt="logo" />;
};

export default LogoSmall;
