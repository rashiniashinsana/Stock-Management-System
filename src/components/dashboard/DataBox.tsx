import { useSelector } from "react-redux";
import { TbUsers, TbBox, TbClipboardList } from "react-icons/tb";
import { RootState } from "../../store/store.ts";

function DataBox() {
    const customers = useSelector((state: RootState) => state.customer);
    const items = useSelector((state: RootState) => state.item);
    const orders = useSelector((state: RootState) => state.order);

    const stats = [
        { title: "Total Items", value: items.length, icon: TbBox, color: "bg-green-600", textColor: "text-white" },
        { title: "Total Customers", value: customers.length, icon: TbUsers, color: "bg-blue-600", textColor: "text-white" },
        { title: "Total Orders", value: orders.length, icon: TbClipboardList, color: "bg-yellow-500", textColor: "text-gray-900" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-6">
            {stats.map((stat, index) => (
                <div key={index} className="flex items-center bg-gray-800 rounded-lg p-6 shadow-md">
                    {/* Icon with Background */}
                    <div className={`p-3 rounded-full ${stat.color}`}>
                        <stat.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Title & Value */}
                    <div className="text-center flex-1">
                        <h2 className="text-2xl font-bold">{stat.value}</h2>
                        <p className="text-sm text-gray-400">{stat.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DataBox;
