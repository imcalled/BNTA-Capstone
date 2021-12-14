import {Line} from 'react-chartjs-2'
import { useEffect } from 'react'
import { useState } from 'react'

const Graph=({valuesToGraph})=>{

    const [chartData,setChartData]=useState([]);


    useEffect(() => {
        setChartData({
            labels: valuesToGraph.map((value => value.date)),
            values: valuesToGraph.map((value => value.weightAchieved))
        }
    )},[valuesToGraph]);

    return(
        <>
        <p>Hello</p>
        <div>
            
        <Line
          data={chartData}
          options={{
          }}
        />
      </div>
      </>
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