

const Graph=({valuesToGraph})=>{


    // if((valuesToGraph.timeAchieved>0 || valuesToGraph.distanceAchieved>0) && valuesToGraph.setsAchieved===0 && valuesToGraph.repsAchieved===0 && valuesToGraph.weightAchieved===0){

    //     return("Cardio")

    // }
    // else if((valuesToGraph.setsAchieved>0 && valuesToGraph.repsAchieved>0) && valuesToGraph.timeAchieved===0 && valuesToGraph.distanceAchieved===0 && valuesToGraph.weightAchieved===0){

    //     return("Weights")

    // }
    // else if((valuesToGraph.setsAchieved>0 && valuesToGraph.repsAchieved>0 && valuesToGraph.weightAchieved>0)  && valuesToGraph.timeAchieved===0 && valuesToGraph.distanceAchieved===0) {

    //     return("Calisthenics")

    // }
    const renderGraph = () =>{if(valuesToGraph){
        
    return(valuesToGraph.date)
    }
    else{<p>Loading</p>}}

    
    return(renderGraph);





}

export default Graph;
