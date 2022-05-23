import { Cart } from "../module";
import { Text, UnorderedList, ListItem } from "@chakra-ui/react";

interface Props {
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
}

function Receipt({ cart, setCart }: Props) {
  return (
    <div>
      <Text marginBottom={8} textAlign="center" fontSize="5xl">
        Receipt
      </Text>
      <UnorderedList listStyleType="none" textAlign="center">
        {cart &&
          cart.map((item) => (
            <ListItem>
              <Text fontSize="3xl">
                {item.productName} x{item.count}
              </Text>
            </ListItem>
          ))}
      </UnorderedList>
      {cart.length === 0 && (
        <Text marginBottom={10} textAlign="center" fontSize="3xl">
          Buy something!!
        </Text>
      )}
    </div>
  );
}

export default Receipt;
