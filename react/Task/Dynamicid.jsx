import React from 'react'
import { useParams } from 'react-router-dom';

const Dynamicid = () => {
    const { id } = useParams();
  return (
    <div>Dynamicid {id}</div>
  )
}

export default Dynamicid