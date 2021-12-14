import {Line} from 'react-chartjs-2'
import { useEffect } from 'react'
import { useState } from 'react'
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto'
Chart.register(CategoryScale)

const Graph=({valuesToGraph, exerciseType})=>{

    const [chartData,setChartData]=useState([]);


    useEffect(() => {
        setChartData({
            labels: valuesToGraph.map((value => value.date)),
            valuesTime: valuesToGraph.map((value => value.timeAchieved)),
            valuesDistance:valuesToGraph.map((value => value.distanceAchieved)),
            valuesSets:valuesToGraph.map((value => value.setsAchieved)),
            valuesReps:valuesToGraph.map((value => value.repsAchieved)),
            valuesWeight: valuesToGraph.map((value => value.weightAchieved))
        }
    )},[valuesToGraph]);

    if(exerciseType === "WEIGHT"){
    const data = {
      datasets: [{
        label: chartData.date,
        data: chartData.valuesWeight,
        fill: false
      }]
    }
  }
    
  else if (exerciseType ==="CALISTHENICS"){
    const data = {
      datasets: [{
        label: chartData.date,
        data: (chartData.valuesSets*chartData.valuesReps),
        fill: false
      }]
  }
}
  else if (exerciseType ==="CARDIO"){
    const data = {
      datasets: [{
        label: chartData.date,
        data: chartData.valuesTime,
        fill: false
      }]
  }
}



    return(
      valuesToGraph ?
        <>
        <p>Hello</p>
        <div>
        <Line
          data={data}
          options={
            {scales: {
            x: {labels:chartData.labels},
            y:{labels:chartData.values}
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


    //  if((valuesToGraph.timeAchieved>0 || valuesToGraph.distanceAchieved>0) && valuesToGraph.setsAchieved===0 && valuesToGraph.repsAchieved===0 && valuesToGraph.weightAchieved===0){
    //     return("Cardio")
    //     }
    // else if((valuesToGraph.setsAchieved>0 && valuesToGraph.repsAchieved>0) && valuesToGraph.timeAchieved===0 && valuesToGraph.distanceAchieved===0 && valuesToGraph.weightAchieved===0){

    //     return ("Weights")
    //     }
    // else if((valuesToGraph.setsAchieved>0 && valuesToGraph.repsAchieved>0 && valuesToGraph.weightAchieved>0)  && valuesToGraph.timeAchieved===0 && valuesToGraph.distanceAchieved===0){
        
    //         return("Calisthenics")
        
    //         }


            
    // const renderGraph = () =>{if(valuesToGraph){
    //     return(valuesToGraph.date)
    //     }
    //     else{
    //     <p>Loading...</p>}
    // }
        
        
    //     return(renderGraph);
