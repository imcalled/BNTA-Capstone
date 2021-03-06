import {Line} from 'react-chartjs-2';
import "../Styles/MyStatsPage.css";
import { useEffect } from 'react';
import { useState } from 'react';
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);


const Graph=({valuesToGraph, exerciseType})=>{

    const [chartData,setChartData]=useState([]);


    useEffect(() => {
        setChartData({
            labels: valuesToGraph.map((value => value.date)),
            valuesTime: valuesToGraph.map((value => value.timeAchieved)),
            valuesDistance: valuesToGraph.map((value => value.distanceAchieved)),
            valuesSets: valuesToGraph.map((value => value.setsAchieved)),
            valuesReps: valuesToGraph.map((value => value.repsAchieved)),
            valuesWeight: valuesToGraph.map((value => value.weightAchieved))
        }
    )},[valuesToGraph]);

    let yAxisLabel;
    let yAxisData;
    let unit;

    if (exerciseType === "WEIGHTS") {
      yAxisData = chartData.valuesWeight;
      unit = "kg";
      yAxisLabel = "Weight Lifted"
    } else if (exerciseType === "CALISTHENICS") {
      yAxisData = chartData.valuesSets.map(function (n, i) {
        return n * chartData.valuesReps[i];
      });
      unit = "reps";
      yAxisLabel = "Total Reps"
    } else if (exerciseType === "CARDIO") {
      yAxisData = chartData.valuesDistance.map(function (n, i) {
        return n / chartData.valuesTime[i];
      });
      unit = "meters/min";
      yAxisLabel = "Pace"
    }

    const data = {
      datasets: [
        {
          label:"Exercise Logs",
          data: yAxisData,
          fill: true,
          backgroundColor: "transparent",
          borderColor: "rgba(255,30,0, 0.50)",
          pointBackgroundColor: "rgba(255, 255, 255, 1)",
          tension: 0.15,
          fill: {
            target: "origin",
            above: "rgba(255,69,0,0.6)", // Area will be red above the origin
            below: "rgb(0, 0, 255)", // And blue below the origin
          },
        },
      ],
    };

    return (
      exerciseType ?(

        <Line
            data={data}
            options={{

              scales: {
                x: {
                  labels: chartData.labels,
                  title: {
                    color: "grey",
                    display: true,
                    text: "Date",
                  },
                },
                y: {
                  labels: data.datasets.data,
                  ticks: {
                    callback: function (value) {
                      return value + ` ${unit}`;
                    },
                  },
                  title: {
                    color: "grey",
                    display: true,
                    text: `${yAxisLabel}`,
                  },
                },
              },
              responsive: true,
              maintainAspectRatio: false,
              aspectRatio:2.6
                 }}
                
          />)
          :

          (<p>Select an exercise to see your progress</p>)
          
          

    );
}
 

export default Graph;