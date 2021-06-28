import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProgContainer = styled.div`
  progress[value] {
    -webkit-appearance: none;
    appearance: none;
  }

  progress[value]::-webkit-progress-bar {
    height: .5em;
    border-radius: 10px;
    background-color: #e2e2e2;
  }

  progress[value]::-webkit-progress-value {
    height: .5em;
    border-radius: 10px;
    background-color: black;
  }
  `;

function DistBar ({ value }) {
  return (
    <ProgContainer value={value}>
    <progress value={value} max="100" />
    </ProgContainer>
  )
}

export default DistBar;
