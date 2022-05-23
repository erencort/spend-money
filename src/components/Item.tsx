import React, { useEffect } from "react";
import { Cart } from "../module";
import { Button, Image, Box, Center, Text } from "@chakra-ui/react";

interface Props {
  id: number;
  productName: string;
  img: string;
  productPrice: number;
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
}

function Item({
  id,
  productName,
  img,
  productPrice,
  cart,
  setCart,
  money,
  setMoney,
}: Props) {
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const cartItem = cart.find((item) => item.id === id);

  const addCartHandle = () => {
    setCart([...cart, { id, productName, count: 1 }]);
    if (cartItem) {
      cartItem.count += 1;
      setCart([...cart.filter((item) => item.id !== id), cartItem]);
    }
    setMoney(money - productPrice);
  };

  const removeCartHandle = () => {
    if (cartItem) {
      cartItem.count -= 1;
      if (cartItem.count === 0) {
        setCart([...cart.filter((item) => item.id !== id)]);
      } else {
        setCart([...cart.filter((item) => item.id !== id), cartItem]);
      }
    }
    setMoney(money + productPrice);
  };

  return (
    <Box
      alignItems="center"
      margin={3}
      padding={3}
      textAlign="center"
      borderBottom=".2rem solid black"
    >
      <Box>
        <Text marginBottom={3} fontSize="3xl">
          {productName}
        </Text>
      </Box>
      <Box>
        <Center>
          <Image minHeight="225px" src={img} alt="img" />
        </Center>
      </Box>
      <Box>
        <Text marginTop={4} marginBottom={4} fontSize="xl">
          Price:{productPrice}
        </Text>
      </Box>
      <Box>
        <Button
          onClick={addCartHandle}
          disabled={productPrice > money ? true : false}
          marginRight={3}
          size="xs"
          colorScheme="teal"
        >
          Buy
        </Button>
        <span>{cartItem ? cartItem.count : 0}</span>
        <Button
          onClick={removeCartHandle}
          disabled={cartItem ? false : true}
          marginLeft={3}
          size="xs"
          colorScheme="teal"
        >
          Sell
        </Button>
      </Box>
    </Box>
  );
}

export default Item;
