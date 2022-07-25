import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import links from "../links";

const DesktopMenu = () => {
    const linkStyles = {
        _hover: {
            transform: 'scale(1.2)',
            color: 'yellow.500',
        },
        color: '#ffffff',
        fontFamily: 'Nunito',
        fontSize: '18px',
        fontWeight: '600',
        mr: '20px',
        textDecoration: 'none',
    };
  return (
    <Flex alignItems="center" ml="50px">
      {links.map(link => (
        <ChakraLink as="div" key={link.name} {...linkStyles}>
        <Link to={link.href}>
            {link.name}
        </Link>
        </ChakraLink>

      ))}
    </Flex>
  );
};

export { DesktopMenu };
