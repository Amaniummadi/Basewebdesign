import React,{useEffect,useState} from 'react'
import {Line} from 'react-chartjs-2'
import { Block } from 'baseui/Block'



type AllIpops={
    confirmed:number
    deaths:number
    reportDate:number
}

const ChartFordata = () => {
    const [dailyupdates, setDailyupdates] = useState({})
    useEffect(() => {
      
        fetchdata();
    }, [])

    const fetchdata = async () => {
        let confirmed:AllIpops[]=[];
        let deaths:AllIpops[]=[];
        let reportDate:AllIpops[]=[];
        const res=await fetch(`https://covid19.mathdro.id/api/daily`);
        const data =await res.json();
      
        console.log("datain api",data);
        data.forEach((dailydata:any) =>{
             
                    confirmed.push(dailydata.confirmed.total);
                    deaths.push(dailydata.deaths.total);
                    reportDate.push(dailydata.reportDate);
                });


        setDailyupdates({
                labels:reportDate,
                datasets:[{
                    label:'infected cases',
                    data: confirmed,
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
                    label:'deaths cases',
                    data: deaths,
                }]
            })
       
       
     
    }
  

console.log("dailyupdates",dailyupdates);

    return (
    //    dailyupdates.length ? ( 
        <Block
        width='100%'
        marginTop="70px"
        position="relative"
        marginLeft="10%"
        marginRight="10%">
            <Line  data={dailyupdates} options={{
                responsive:true,
                title:{
                    display:true,
                    text:'date to date updates '
                }
            }}/>
        </Block>
    //    ):null  
    )
}

export default ChartFordata
