import React from "react";

function CardsLoading(Component) {
  return function LoadingComponent({ isLoading, ...props }) {

    if (!isLoading) return <Component {...props} />;
    return <p className="py-8">Fetching data may take some time</p>;
    
  };
}

export default CardsLoading;
