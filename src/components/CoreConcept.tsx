import React from 'react';

interface CoreConceptProps {
  title: string;
  description: string;
  image?: string;
}

const CoreConcept: React.FC<CoreConceptProps> = ({ title, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CoreConcept;