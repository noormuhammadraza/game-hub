import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/site-logo.png";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" fit="cover" />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default Navbar;
