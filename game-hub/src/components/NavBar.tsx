import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import K from "../assets/k.jpg";
const NavBar = () => {
  return (
    <HStack>
      <Image src={K} boxSize="60px" />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default NavBar;
