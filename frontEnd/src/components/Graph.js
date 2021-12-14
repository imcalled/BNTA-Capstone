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
