import React, { useState, useEffect } from 'react';

const DataFetcher: React.FC = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    setData('Data loaded!');
  }, []);
  return <p>{data}</p>;
};

export default DataFetcher;