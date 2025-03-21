import { Item } from "../../models/item.ts";

type ItemTableProps = {
    items: Item[];
};

export const ItemTableComponent = ({ items }: ItemTableProps) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-2 mt-7">
            <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th className="px-6 py-3">Item Category</th>
                    <th className="px-6 py-3">Description</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Quantity</th>
                </tr>
                </thead>
                <tbody className="capitalize">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <tr
                            key={index}
                            className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} dark:bg-gray-800`}
                        >
                            <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-400">
                                {item.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-400">
                                {item.description}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-400">
                                {new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                }).format(item.price)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-400">
                                {item.quantity}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={4} className="px-6 py-4 text-center text-gray-500 dark:text-gray-300">
                            No items found.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};
