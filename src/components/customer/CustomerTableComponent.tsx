import { Customer } from "../../models/customer.ts";

type CustomerTableProps = {
    customers: Customer[];
};

export const CustomerTableComponent = ({ customers }: CustomerTableProps) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-2 mt-7">
            <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th className="px-6 py-3">Customer Name</th>
                    <th className="px-6 py-3">Address</th>
                    <th className="px-6 py-3">Mobile</th>
                    <th className="px-6 py-3">Email</th>
                </tr>
                </thead>
                <tbody className="capitalize">
                {customers.length > 0 ? (
                    customers.map((customer, index) => (
                        <tr
                            key={index}
                            className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} dark:bg-gray-800`}
                        >
                            <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-400">
                                {customer.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-400">
                                {customer.address}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-400">
                                {customer.mobile}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-400">
                                {customer.email}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={4} className="px-6 py-4 text-center text-gray-500 dark:text-gray-300">
                            No customers found.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};
