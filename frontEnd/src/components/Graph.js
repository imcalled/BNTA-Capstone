import {Line} from 'react-chartjs-2';
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

    let yAxisData;

    if(exerciseType==="WEIGHTS"){
      yAxisData= chartData.valuesWeight
    }
    else if (exerciseType==="CALISTHENICS"){
      yAxisData = chartData.valuesSets.map(function(n, i) { return n * chartData.valuesReps[i]; });
    }
    else if(exerciseType==="CARDIO"){
      yAxisData = chartData.valuesDistance.map(function(n, i) { return n / chartData.valuesTime[i]; });
    }

    const data = {
      datasets: [{
        label: valuesToGraph.date,
        data: yAxisData,
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension:0.2
      }]
    }

    return(
      
      valuesToGraph ?
        <>
        {console.log(exerciseType)}
        {console.log(data)}
    
        <p>Hello</p>
        <div>
        <Line
          data={data}
          options={
            {scales: {
            x: {labels:chartData.labels},
            y: {labels:data.datasets.data}
          }
         }
        }
        />
      </div>
      </>
      :
      
      <p>Loading...</p>
    
      
    )
}
 

export default Graph;