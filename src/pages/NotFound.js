import React, { useEffect } from 'react';

function NotFound() {
  useEffect(() => {
    document.title = 'Not Found - Instagram';
  });

  return (
    <div className=" bg-gray-500">
      <div className="mx-auth max-w-screen-lg">
        <p className="text-center text-2xl">Not Found!</p>
      </div>
    </div>
  );
}

export default NotFound;
