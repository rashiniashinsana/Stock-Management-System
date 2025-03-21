import { useDispatch, useSelector } from "react-redux";
import { Customer } from "../../models/customer.ts";
import React, { useState } from "react";
import { Item } from "../../models/item.ts";
import { addOrder } from "../../reducers/OrderSlice.tsx";

const AddOrder = () => {
    const dispatch = useDispatch();

    // @ts-ignore
    const customers = useSelector((state) => state.customer);
    const [customerName, setCustomerName] = useState("");

    // @ts-ignore
    const items = useSelector((state) => state.item);
    const [itemCategory, setItemCategory] = useState("");
    const [itemPrice, setItemPrice] = useState(0);
    const [itemQty, setItemQty] = useState(0);
    const [selectedQty, setSelectedQty] = useState(0);

    const [addedItems, setAddedItems] = useState([]);

    function handleMobileChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedMobile = event.target.value;
        const customer = customers.find(
            (customer: Customer) => customer.mobile === Number(selectedMobile)
        );

        if (customer) {
            setCustomerName(customer.name);
        } else {
            setCustomerName("");
        }
    }

    function getCustomerMobiles() {
        return customers.map((customer: Customer) => (
            <option key={customer.mobile} value={customer.mobile}>
                {customer.mobile}
            </option>
        ));
    }

    function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedCategory = event.target.value;
        const item = items.find((item: Item) => item.category === selectedCategory);

        if (item) {
            setItemCategory(item.category);
            setItemPrice(item.price);
            setItemQty(item.quantity);
        } else {
            setItemCategory("");
            setItemPrice(0);
            setItemQty(0);
        }
    }

    function getItemCategories() {
        return items.map((item: Item) => (
            <option key={item.category} value={item.category}>
                {item.category}
            </option>
        ));
    }

    function handleAddItem() {
        if (!itemCategory || !itemPrice || selectedQty <= 0) {
            alert("Please select an item and enter a valid quantity.");
            return;
        }

        const totalPrice = Number(itemPrice) * selectedQty;

        if (selectedQty <= Number(itemQty)) {
            const newItem = {
                category: itemCategory,
                unitPrice: itemPrice,
                quantity: selectedQty,
                totalPrice,
            };

            // @ts-ignore
            setAddedItems([...addedItems, newItem]);
            setSelectedQty(0);
        } else {
            alert("Selected quantity is not available.");
        }
    }

    function placeOrder(type: string) {
        const newOrder = addedItems.map((item: Item) => ({
            customer: customerName,
            mobile: Number(customers.find((customer: Customer) => customer.name === customerName)?.mobile),
            category: item.category,
            // @ts-ignore
            unitPrice: item.unitPrice,
            quantity: item.quantity,
            // @ts-ignore
            totalPrice: item.totalPrice,
        }));

        switch (type) {
            case "ADD_ORDER":
                dispatch(addOrder(newOrder));
                alert("Order placed successfully.");
                resetTable();
                break;
            default:
                break;
        }
    }

    function resetTable() {
        setAddedItems([]);
        setCustomerName("");
        setItemCategory("");
        setSelectedQty(0);
    }

    // @ts-ignore
    return (
        <div className="flex flex-col lg:flex-row gap-8 bg-gray-900 text-gray-300 p-8 rounded-xl shadow-2xl">
            <div className="lg:w-2/5 bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent font-bold mb-6">Order Details</h2>
                <div className="space-y-4">
                    <select
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:ring-2 focus:ring-blue-400"
                        onChange={handleMobileChange}
                    >
                        <option>Select Customer Mobile Number</option>
                        {getCustomerMobiles()}
                    </select>

                    <input
                        type="text"
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:ring-2 focus:ring-blue-400"
                        placeholder="Customer Name"
                        value={customerName}
                        readOnly
                    />

                    <select
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:ring-2 focus:ring-blue-400"
                        onChange={handleCategoryChange}
                    >
                        <option>Select Item Category</option>
                        {getItemCategories()}
                    </select>

                    <input
                        type="number"
                        placeholder="Unit Price"
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:ring-2 focus:ring-blue-400"
                        value={itemPrice}
                        readOnly
                    />

                    <input
                        type="number"
                        placeholder={`Available Quantity ${itemQty}`}
                        className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:ring-2 focus:ring-blue-400"
                        onChange={(e) => setSelectedQty(Number(e.target.value))}
                    />

                    <button
                        className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-5 py-3 rounded-lg hover:from-blue-500 hover:to-teal-400 w-full font-semibold transition"
                        onClick={handleAddItem}
                    >
                        Add Item
                    </button>
                </div>
            </div>

            <div className="lg:w-3/5 bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent font-bold mb-6">Add
                    Items</h2>
                <div className="overflow-x-auto">
                    <table className="w-full bg-gray-600 text-gray-300  shadow-lg rounded-tl-2xl">
                        <thead>
                        <tr className="bg-gradient-to-br from-stone-800 to-zinc-800 text-white">
                            <th className="p-4 text-left">Category</th>
                            <th className="p-4 text-left">Unit Price</th>
                            <th className="p-4 text-left">Quantity</th>
                            <th className="p-4 text-left">Total Price</th>
                            <th className="p-4 text-center">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {addedItems.map((item, index) => (
                            <tr key={index} className="border-b border-gray-800 hover:bg-gray-700 transition">
                                <td className="p-4">{item.category}</td>
                                <td className="p-4">{item.unitPrice}</td>
                                <td className="p-4">{item.quantity}</td>
                                <td className="p-4">{item.totalPrice}</td>
                                <td className="p-4 text-center">
                                    <button
                                        className="px-3 py-1 text-red-400 bg-gray-800 rounded-md transition hover:text-white hover:bg-red-600"
                                        onClick={() => setAddedItems(addedItems.filter((_, i) => i !== index))}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6">
                    <select className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 mb-4">
                        <option value="Cash">Cash</option>
                        <option value="Card">Card</option>
                    </select>

                    <button
                        className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-5 py-3 rounded-lg hover:from-blue-500 hover:to-teal-400 w-full font-semibold transition"
                        onClick={() => placeOrder("ADD_ORDER")}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddOrder;
