import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import "./Style.css"
import { Box} from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
export default function Jobs() {
    const [data, setdata] = useState([])
    const getdata = () =>{
        axios.get("http://localhost:8080/data")
        .then((e)=> {
            setdata(e.data)
        })
    }

    useEffect(()=>{
        getdata()
    },[])

  return (
    <div>


<h1>hello jobs</h1>



<Flex className="white main_flex">
  {data.map((e)=>{
    return <Box key={e.id} margin="5px" padding="10px"  borderWidth='1px' borderRadius='lg' overflow='hidden'>
         <Image boxSize='150px'   src={e.logo} />
         <Text textAlign="left" fontSize='4xl'>{e.name}</Text>
         <Text textAlign="left" color="teal" fontSize='2xl'> Role : {e.role}</Text>
         <Text textAlign="left" color="yellowgreen" fontSize='2xl'> Ctc : {e.ctc}</Text>
         <Text textAlign="left" fontSize='lg'>Description : {e.description}</Text>
         <Text textAlign="left"  fontSize='2xl'>Experience : {e.experience}</Text>
         <Text textAlign="left" color="hotpink" fontSize='2xl'>Location : {e.location}</Text>
         <Text textAlign="left" fontSize='lg'>Openinigs : {e.openinigs}</Text>
         <Text textAlign="left" color="skyblue" fontSize='2xl'> Process : {e.process}</Text>



 

            
</Box>
})}
</Flex>

    </div>
  )
}
