import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { gasDataListing } from './actions';

const GasChart = () => {

    const disptach = useDispatch();
    useEffect(()=>{
     disptach(gasDataListing());
    },[])

  return (
    <div>Gas Chart</div>
  )
}

export default GasChart