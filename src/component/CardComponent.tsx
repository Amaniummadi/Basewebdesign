import React,{useEffect,useState} from 'react'
// import {styled} from 'baseui'
import {Card, StyledBody,StyledAction} from 'baseui/card';
import {Button} from 'baseui/Button'
import { useStyletron } from "styletron-react";
type arrayIprops={
    Iprops:string[] 
}

interface Iprops{
    country:string;
    cases?:number;
    active?:number;
    recovered?:number;
    todayDeaths?:number;
    todayCases?:number;
}
// const SingleCard = styled('div', {
//     width: "200px",
//     margin: "10px",
//     padding: "10px",
//     backgroundColor: "#f9fafd",
//     transition:"all 0.2s ease",
//     border: "1px solid #e9ecef",
//     borderRadius:"10px",
//     textAlign: "center",
//     position: "relative",
//     display:"inline-flex",
//     justifyContent:"center"
//   });
const CardComponent = () => {
    const [css] = useStyletron();
    const [allCountrys, setAllCountrys] = useState([])

    useEffect(() => {
        fetchcountrydetails()
    }, [])

    const fetchcountrydetails= async () =>{
      
        const res=await fetch(`https://coronavirus-19-api.herokuapp.com/countries`);
       const data=await res.json();
        console.log("res",data);
        setAllCountrys(data)
    }

    console.log("allCountrys",allCountrys);
    return (
        <div style={{backgroundColor:'#edf2f7'}} >
            <h1 style={{display:"block",
        margin:"40px auto 10px",color:"#f89d36",textTransform:"uppercase"}}>ALL COUNTRIES CORONA CASES</h1>
        <div className={css({
            display: "flex",
        margin:"40px 10%",
        justifyContent: "space-around",
        alignItems:"flex-start",
        alignContent: "space-between",
        flexDirection:"row",
        flexWrap:"wrap",
        transition: "all 0.2s ease"
            })}>
        {allCountrys.map((allCountry:any,i:number)=> {
                return(
                    <Card key={i}
                    overrides={{Root: {style: {width: '328px',margin: "10px",
                        padding: "10px",
                        backgroundColor: "#f9fafd",
                        transition:"all 0.2s ease",
                        borderRadius:"10px",
                        textAlign: "center",
                        position: "relative",
                        display:"inline-flex",
                        justifyContent:"center",
                        color:"#000",
                        borderColor:"#e9ecef",
                        borderWidth:"1px",
                        borderStyle:"solid",

                      
                        ":hover": {
                            backgroundColor: "#fff",
                            boxShadow:" 0 10px 25px rgba(60, 72, 88, 0.15)",
                            transform:"translateY(-5px)",
                            borderColor: "transparent"
                            
                          }
                    }}}}
                    title={allCountry.country}
                    >
                    <StyledBody>
                    <p>Total Cases : <span style={{color:"#f89d36"}}>{allCountry.cases}</span></p>
                    <p>Total Deaths : <span style={{color:"#f89d36"}}>{allCountry.deaths}</span></p>
                    <p>Total Recovered :<span style={{color:"#f89d36"}}>{allCountry.recovered}</span></p>
                    <p>TodayCases :<span style={{color:"#f89d36"}}>{allCountry.todayCases}</span></p>
                    <p>TodayDeaths :<span style={{color:"#f89d36"}}>{allCountry.todayDeaths}</span></p>
                    <p>TotalTests :<span style={{color:"#f89d36"}}>{allCountry.totalTests}</span></p>
                    </StyledBody>
                    <StyledAction>
                        <Button overrides={{BaseButton: {style: {width: '100%',backgroundColor:"#f89d36",borderRadius:"5px"}}}}>
                        Read More
                        </Button>
                    </StyledAction>
                    </Card>
                )
            })}
        </div>
            
        </div>
    )
}

export default CardComponent
