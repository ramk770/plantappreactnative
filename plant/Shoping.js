import { Text, View } from "react-native";

const Shopping = () => {
    
  
        
const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

const calculateTotal = () => {
  return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
};

return (
  <View>
    {cartItems.map(item => (
      <View key={item.id}>
        <Text>{item.name} - ${item.price}</Text>
        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    ))}
    <Text>Total: ${calculateTotal()}</Text>
    <TouchableOpacity onPress={clearCart}>
      <Text>Clear Cart</Text>
    </TouchableOpacity>
  </View>
);
};

        
 
export default Shopping;

