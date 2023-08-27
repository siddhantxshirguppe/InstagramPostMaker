import React from "react";
import { Chart } from "react-google-charts";
import "./style.css"
import memes_data from "../postdata.js"

export default function Instagram() 
{
    const data_chart = [
        ["Month", "#taylorswift", "#strangerthings","#fifa","#JWST","#NFT","#Ukraine","#visionpro","#fashion"],

       ["Jan", 500, 2676,  532, 2628,  564, 2596,  596, 2564],
       ["Feb", 684, 2436,  716, 2388,  748, 2356,  780, 2324],
       ["Mar", 964, 2228,  900, 2180,  932, 2148,  964, 2116],
       ["Apr",1052, 1988, 1084, 1940, 1396, 1908, 1148, 1876],
       ["May",1236, 1780, 1268, 1732,  648, 1700, 1332, 1668],
       ["Jun",1420, 1572, 1452, 1524, 1484, 1492,  884, 1460],
       ["Jul",1604, 1364, 1636, 1300, 1668, 1268, 1700, 1236],
       ["Aug",1780, 1236, 1812, 1180, 1844, 1148, 1176, 1116],
       ["Sep",1964,  700, 1996, 1068, 2028, 1036, 2060, 1004],
       ["Oct",2148,  964, 2180,  932,  956,  900, 2244,  868],
       ["Nov",2332,  828, 2364,  796, 2396,  764, 2428,  732],
       ["Dec",2516,  604, 2548,  668, 2580,  636, 2612,  700],
      ];
      
    const options_chart = {
        title: "Trending instagram hashtags for 2022",
        hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
        vAxis: { minValue: 0 },
        chartArea: { width: "50%", height: "70%" },
        pointsVisible: true,
        backgroundColor: '#E4E4E4',
      };

    const data_pie = [
    ["Trending", "percentage traffic"],
    ["Fashion", 110],
    ["Foods", 28],
    ["Lifestyle", 92],
    ["Health", 202],
    ["Travel", 78],
    ];
      
    const options_pie = {
    title:  "Trending instagram topics for 2022",
    backgroundColor: '#E4E3E4',
    };

    return(
        <div className="chart-container">

        <div className="chart">
        <Chart
        chartType="AreaChart"
        width="100%"
        height="300px"
        data={data_chart}
        options={options_chart}
        />
        </div>

        <div className="chart">
        <Chart
        chartType="PieChart"
        data={data_pie}
        options={options_pie}
        width={"100%"}
        height={"400px"}
        />
        </div>

        </div>
    )
}