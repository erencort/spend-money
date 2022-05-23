import { Text, Box } from "@chakra-ui/react";
interface Props {
  money: number;
}

function Header({ money }: Props) {
  return (
    <Box textAlign="center" borderBottom=".2rem solid black">
      <Text fontSize="5xl">Spend $10B Money</Text>
      <Text fontSize="4xl">Your Money: ${money}</Text>
    </Box>
  );
}

export default Header;
