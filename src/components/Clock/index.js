import {useState,useEffect} from 'react'
import {MainCon,Button,ClockCon,Heading,Time} from './styledComponents'

const Clock=()=>{
    const [button,setButton]=useState(false)
    const [date,setDate]=useState(new Date())

    const onClickButton=()=>{
        setButton(prevState=>!prevState)
    }

    useEffect(()=>{
        const timerId=setInterval(()=>{
            setDate(new Date())
        },1000)
        return ()=>{
            clearInterval(timerId)
        }
    },[])

    return(
        <MainCon>
            <Button type="button" onClick={onClickButton} >{button ? "Hide Button":"Show Button"}</Button>
            {button && <ClockCon>
                <Heading>Clock</Heading>
                <Time>{date.toLocaleTimeString()}</Time>
            </ClockCon>}
        </MainCon>
    )
}

export default Clock