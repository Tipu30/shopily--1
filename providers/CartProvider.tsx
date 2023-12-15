'use client';

import { CartContextprovider } from "@/hooks/useCart";

interface CartproviderProps {
    children: React.ReactNode;
}


const Cartprovider: React.FC<CartproviderProps> = ({ children }) => {
    return (
        <CartContextprovider>
            {children}
        </CartContextprovider>
    )
}

export default Cartprovider