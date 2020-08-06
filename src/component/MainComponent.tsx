import React from 'react'
import {Line} from 'react-chartjs-2'

const MainComponent = () => {
 
const data={
    labels:['jan','feb','mar','apr','may'],
    datasets:[{
        label:'sales for 2020',
        data:[3,2,6,1,6,2,5],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1

    },
{
    label:'sales for 2019',
    data:[0,3,5,6,1,5,1]
}
], 
}

const option={
    title:{
        display:true,
        text:'Line chart'
    },
    scales:{
        yAxes:[
            {
                ticks:{
                    min:0,
                    max:6,
                    stepSize:1
                }
            }
        ]
    }
}


    return (
        <div style={{width:'720px',marginTop:"70px",position:"relative"}}>
           <Line data={data} options={option}/>
        </div>
    )
}

export default MainComponent
