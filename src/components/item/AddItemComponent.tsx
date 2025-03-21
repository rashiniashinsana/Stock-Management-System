import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addItem, deleteItem, updateItem} from "../../reducers/ItemSlice.tsx";
import {Item} from "../../models/item.ts";
import {ItemTableComponent} from "./ItemTableComponent.tsx";
import { TbBox, TbEdit, TbTrash } from "react-icons/tb";

export const AddItemComponent = () => {

    const dispatch = useDispatch();

    // @ts-ignore
    const item = useSelector((state) => state.item);

    const [itemName, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState('');

    const itemOperations = (type: string) => {
        const newItem: Item = {
            category: itemName,
            description,
            price: Number(price),
            quantity: Number(qty),
        };

        switch (type) {
            case 'ADD_ITEM':
                dispatch(addItem(newItem));
                break;
            case 'UPDATE_ITEM':
                dispatch(updateItem(newItem));
                break;
            case 'DELETE_ITEM':
                dispatch(deleteItem(itemName));
                break;
            default:
                break;
        }
    };

    return (
        <>
            <form className="mx-2 mt-6">
                <div className="grid gap-6 mb-6 md:grid-cols-4">
                    <div>
                        <label htmlFor="item_name"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <input type="text" id="item_name" onChange={(e) => setItemName(e.target.value)}
                               className="w-full p-2 border rounded capitalize border-blue-600 dark:bg-gray-700 dark:text-white"
                               placeholder="Category" required/>
                    </div>
                    <div>
                        <label htmlFor="description"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <input type="text" id="description" onChange={(e) => setDescription(e.target.value)}
                               className="w-full p-2 border rounded capitalize border-blue-600 dark:bg-gray-700 dark:text-white"
                               placeholder="Brand" required/>
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price
                        </label>
                        <input type="number" id="price" onChange={(e) => setPrice(e.target.value)}
                               className="w-full p-2 border rounded border-blue-600 dark:bg-gray-700 dark:text-white"
                               placeholder="1000" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="qty"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                        <input type="number" id="qty" onChange={(e) => setQty(e.target.value)}
                               className="w-full p-2 border rounded border-blue-600 dark:bg-gray-700 dark:text-white"
                               placeholder="10" required/>
                    </div>
                </div>
            </form>

            <div className="grid gap-5 md:grid-cols-3 mx-20">
                <button
                    type="button"
                    onClick={() => itemOperations('ADD_ITEM')}
                    className="flex items-center gap-2 justify-center text-white bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    <TbBox size={20} /> Add Item
                </button>

                <button
                    type="button"
                    onClick={() => itemOperations('UPDATE_ITEM')}
                    className="flex items-center gap-2 justify-center text-white bg-gradient-to-r from-teal-300 via-teal-500 to-teal-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    <TbEdit size={20} /> Update Item
                </button>

                <button
                    type="button"
                    onClick={() => itemOperations('DELETE_ITEM')}
                    className="flex items-center gap-2 justify-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    <TbTrash size={20} /> Delete Item
                </button>
            </div>


            <ItemTableComponent items={item} />
        </>
    );
};
