import Home from './Home';
import React from 'react'
import { useLocation } from 'react-router-dom'

function Filter(props) {
  const { state } = useLocation();
  const { site } = state;
  let data = props.data;
  let filteredData = data.filter(function (data) {
    return data.site === site;
  }).map(function (data) {
    return data;
  })
  return (
      <Home data={filteredData}/>
  )
}

export default Filter
