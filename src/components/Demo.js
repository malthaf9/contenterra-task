import React from 'react';
import useCardData from '../hooks/useCardData';
import MainContainer from './MainContainer';


const Demo = () => {

useCardData();

  return (
    <div className=''>
      <MainContainer />
    </div>
  );
};

export default Demo;
