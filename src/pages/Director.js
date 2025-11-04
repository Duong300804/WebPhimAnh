import React from 'react';
import PageHeader from '../components/PageHeader';
import DirectorGrid from '../components/DirectorGrid';

const directorList = [
    { id: 525 },   
    { id: 2710 },  
    { id: 19271 }, 
    { id: 19272 }, 
    { id: 488 }, 
    { id: 138 }, 
    { id: 1032 }, 
    { id: 578 }, 
    { id: 137427 }, 
    { id: 108 }, 
    { id: 510 }, 
    { id: 7467 }, 
    { id: 10828 }, 
    { id: 5655 }, 
    { id: 2636 }, 
    { id: 2127 }, 
    { id: 55934 }, 
    { id: 15218 }, 
    { id: 21684 }, 
    { id: 15217 }, 
    { id: 865 }, 
    { id: 4762 }, 
    { id: 608 }, 
    { id: 5602 }, 
];

const Director = () => {
  return (
    <>
      <PageHeader>🎬 Famous Directors</PageHeader>
      <div className="container actor-page">
        <DirectorGrid directors={directorList} />
      </div>
    </>
  );
};

export default Director;
