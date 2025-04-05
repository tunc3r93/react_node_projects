import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const graphData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "Kalorien",
            data: [1200, 1300, 1250, 1400, 1600, 1500, 1800],
            fill: false,
            borderColor: "rgba(75, 192, 192, 1)",
            tension: 0.1,
        },
    ],
};

const Graph = () => {
    return <Line data={graphData} />;
};

export default Graph;