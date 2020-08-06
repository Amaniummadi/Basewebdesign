import React,{useEffect,useState} from 'react'
import {styled} from "baseui"
import {Block} from "baseui/Block"


const Title = styled('h1', ({$theme}) => {
    return {
      color: $theme.colors.warning400,
    };
  });

  const Text = styled('p', ({$theme}) => {
    return {
        color:'#000',
        fontWeight:'bold'
    };
  });

  const SmallText = styled('span', ({$theme}) => {
    return {
        color:"#FFB75E"
    };
  });

const WorldwideCases = () => {
    const [worldwidecases, setWorldwidecases] = useState<number>()
    const [worldwidedeaths, setWorldwidedeaths] = useState<number>()
    const [worldwiderecovered, setWorldwiderecovered] = useState<number>()

useEffect(() => {
    fetchWorldwidecases()
}, [])

const fetchWorldwidecases= async () =>{
const res= await fetch("https://coronavirus-19-api.herokuapp.com/all");
const data=await res.json();
console.log("data",data);
setWorldwidecases(data.cases);
setWorldwidedeaths(data.deaths);
setWorldwiderecovered(data.recovered)

}
// console.log("worldwide",worldwide);
    return (
        <div style={{marginTop:"170px",color:"#FFB75E",padding:"20px",backgroundColor:"#fff",borderRadius:"10px",marginBottom:"30px",boxShadow:"2px 3px 4px"
        }}>
            <Title>world wide covid 19 cases</Title>
            <Block>
    <Text >Total Confirmed : <SmallText style={{color:"#FFB75E"}}>{worldwidecases}</SmallText></Text>
    <Text >Total deaths :<SmallText style={{color:"#FFB75E"}}> {worldwidedeaths}</SmallText></Text>
    <Text >Total recovered :<SmallText style={{color:"#FFB75E"}}> {worldwiderecovered}</SmallText></Text>
            </Block>
        </div>
    )
}

export default WorldwideCases
