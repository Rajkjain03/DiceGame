import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h1>How to play dice game</h1>
        <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>After click on dice if selected number is equal to dice number you will get same point as dice{""}</p>
            <p>If you get wrong guess then 2 point will be deducted </p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
background-color: #000000;
color: white;
max-width: 800px;
margin: 0 auto;
padding: 20px;
margin-top: 40px;
border-radius: 10px;
h2{
    font-size: 24px;

}

.text{
    margin-top: 24px;
}
`;