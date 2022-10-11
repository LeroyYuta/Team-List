import React from 'react';
import Skeleton from 'react-loading-skeleton';

const ListSkeleton = ({
    list
}) => {
    return Array(list)
        .fill(0)
        .map((_, i) => (
            <div key={i} className='card-skeleton'>
                <div className='skeleton-circle'>
                    <Skeleton circle width={72} height={72} />
                </div>
                <div className='skeleton-info'>
                    <Skeleton width={150} />
                    <Skeleton width={150} />
                </div>
            </div>
        ));
};

export default ListSkeleton;
