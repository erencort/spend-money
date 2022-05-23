import React from "react";
import { Cart } from "../module";
import { products } from "../products";
import Item from "./Item";
import { SimpleGrid, Box } from "@chakra-ui/react";

interface Props {
  money: number;
  setMoney: React.Dispatch<React.SetStateAction<number>>;
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
}

function ItemList({ money, setMoney, cart, setCart }: Props) {
  return (
    <div>
      <SimpleGrid columns={4} spacing={10}>
        {products.map((item) => (
          <Box>
            <Item
              id={item.id}
              productName={item.productName}
              productPrice={item.productPrice}
              img={item.image}
              cart={cart}
              setCart={setCart}
              money={money}
              setMoney={setMoney}
            ></Item>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default ItemList;
