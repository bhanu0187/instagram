/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import useTimelinePhotos from '../hooks/useTimelinePhotos';

function TimeLine() {
  const { photos } = useTimelinePhotos();
  return (
    <div className="container col-span-2">
      {!photos ? (
        <>
          {[...new Array(4)].map((_, index) => (
            <Skeleton key={index} count={1} width={320} height={400} />
          ))}
        </>
      ) : photos?.length > 0 ? (
        photos.map((content) => (
          <img
            key={content.docId}
            src={content.imageSrc}
            alt={`${content.username} photoo`}
            className=" w-4/5 mb-4"
          />
        ))
      ) : (
        <p className="text-center text-2xl">Follow People to see People</p>
      )}
    </div>
  );
}

export default TimeLine;
