import React, { useState } from 'react';

function Deals(props) {
  const[krel,handlekrel]=useState(false);
  return (
    <div>
    {  krel ? <div>sahi bolo</div> : <div>galat bolo</div>}
    </div>
    )
}

export default Deals;