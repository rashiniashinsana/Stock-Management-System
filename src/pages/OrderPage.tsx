import { HeaderComponent } from "../components/header/HeaderComponent.tsx";
import AddOrderComponent from "../components/order/AddOrderComponent.tsx";

export const OrderPage = () => {
    return (
        <>
            <div className="bg-gray-900 min-h-screen text-white">
                <HeaderComponent section="Place Order"/>
                <AddOrderComponent/>
            </div>
        </>
    );
};
