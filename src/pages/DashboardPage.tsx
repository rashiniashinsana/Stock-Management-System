import { HeaderComponent } from "../components/header/HeaderComponent.tsx";
import { useSelector } from "react-redux";
import { BarChartComponent } from "../components/dashboard/BarChartComponent.tsx";
import DashboardBox from "../components/dashboard/DataBox.tsx";
import { RootState } from "../store/store.ts";
import {PieChartComponent} from "../components/dashboard/PieChartComponent.tsx";

export const DashboardPage = () => {
    const items = useSelector((state: RootState) => state.item);
    const orders = useSelector((state: RootState) => state.order);

    return (
        <div className="bg-gray-900 min-h-screen text-white flex flex-col">
            <HeaderComponent section="Dashboard" />

            <div className="flex flex-col md:flex-row gap-6 p-6 flex-grow">
                <div className="flex flex-col md:w-3/5 lg:w-3/5 gap-6">
                    <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                        <h2 className="text-xl font-semibold">Popular Categories</h2>
                        <BarChartComponent items={items} />
                    </div>
                </div>

                <div className="flex flex-col md:w-2/5 lg:w-2/5 gap-6">
                    <div className="bg-gray-800 rounded-lg p-6 shadow-md">
                        <h2 className="text-xl font-semibold">Orders by Customer</h2>
                        <PieChartComponent orders={orders} items={items} />
                    </div>
                </div>
            </div>


            <div className="px-6 pb-6 pt-10">
                <DashboardBox />
            </div>
        </div>
    );
};
