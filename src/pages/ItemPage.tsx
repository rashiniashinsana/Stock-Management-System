import { HeaderComponent } from "../components/header/HeaderComponent.tsx";
import { AddItemComponent } from "../components/item/AddItemComponent.tsx";

export const ItemPage = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <div className="mx-5">
                <HeaderComponent section="Item Management" />
                <AddItemComponent />
            </div>
        </div>
    );
};
