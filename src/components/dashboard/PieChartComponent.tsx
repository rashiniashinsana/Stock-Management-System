import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Order } from "../../models/order.ts";
import { Item } from "../../models/item.ts";

ChartJS.register(ArcElement, Tooltip, Legend);

type PieChartProps = {
    orders: Order[];
    items: Item[];
};

export const PieChartComponent = ({ orders, items }: PieChartProps) => {
    const categorySales: { [key: string]: number } = {};

    // Process orders
    orders.forEach((order) => {
        categorySales[order.category] = (categorySales[order.category] || 0) + order.totalPrice;
    });

    // Process items (if they exist in the order categories)
    items.forEach((item) => {
        categorySales[item.category] = (categorySales[item.category] || 0) + item.price * item.quantity;
    });

    const categories = Object.keys(categorySales);
    const totalSales = Object.values(categorySales);

    const data = {
        labels: categories,
        datasets: [
            {
                label: "Total Revenue",
                data: totalSales,
                backgroundColor: [
                    "#FF6384", // Red
                    "#36A2EB", // Blue
                    "#FFCE56", // Yellow
                    "#4BC0C0", // Teal
                    "#9966FF", // Purple
                ],
                borderColor: ["#fff"],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: "bottom" as const },
            title: { display: true, text: "Sales Distribution by Category" },
        },
    };

    return (
        <div className="w-full max-w-md mx-auto mt-5">
            <Pie data={data} options={options} />
        </div>
    );
};
