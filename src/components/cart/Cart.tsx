import { useState } from "react";
import styles from "./Cart.module.scss";

const Cart = () => {
	const [quantity, setQuantity] = useState(0);
	return (
		<div
			className={styles.cart}
			onClick={() => setQuantity((prev) => prev + 1)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				data-name="Layer 1"
				viewBox="0 0 24 24"
				width={"3rem"}
				fill="#0a2647">
				<path d="M14,18a1,1,0,0,0,1-1V15a1,1,0,0,0-2,0v2A1,1,0,0,0,14,18Zm-4,0a1,1,0,0,0,1-1V15a1,1,0,0,0-2,0v2A1,1,0,0,0,10,18ZM19,6H17.62L15.89,2.55a1,1,0,1,0-1.78.9L15.38,6H8.62L9.89,3.45a1,1,0,0,0-1.78-.9L6.38,6H5a3,3,0,0,0-.92,5.84l.74,7.46a3,3,0,0,0,3,2.7h8.38a3,3,0,0,0,3-2.7l.74-7.46A3,3,0,0,0,19,6ZM17.19,19.1a1,1,0,0,1-1,.9H7.81a1,1,0,0,1-1-.9L6.1,12H17.9ZM19,10H5A1,1,0,0,1,5,8H19a1,1,0,0,1,0,2Z" />
			</svg>
			{quantity > 0 && <p className={styles.quantity}>{quantity}</p>}
		</div>
	);
};

export default Cart;