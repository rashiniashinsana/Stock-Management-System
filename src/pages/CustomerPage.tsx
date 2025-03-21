import {HeaderComponent} from "../components/header/HeaderComponent.tsx";
import {AddCustomerComponent} from "../components/customer/AddCustomerComponent.tsx";

export const CustomerPage = () => {
    return (
        <>
            <div className="bg-gray-900 text-white min-h-screen">
                <div className="mx-5">
                    <HeaderComponent section="Customer Management" />
                    <AddCustomerComponent />
                </div>

            </div>
        </>
    );
};
