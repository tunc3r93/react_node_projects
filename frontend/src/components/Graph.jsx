import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Graph = () => {
    const chartRef = useRef(null);

    const data = {
        labels: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
        datasets: [
            {
                label: 'Kalorienverbrauch',
                data: [2000, 2200, 1800, 2500, 2300, 2100, 2400],
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Kalorienverbrauch der Woche',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    borderColor: '#ccc',
                },
                ticks: {
                    beginAtZero: true,
                },
            },
        },
    };

    return (
        <div className="graph-container">
            <Line ref={chartRef} data={data} options={options} />
        </div>
    );
};

export default Graph;
