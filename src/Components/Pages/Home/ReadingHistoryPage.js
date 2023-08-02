import React from 'react';
import { useSelector } from 'react-redux';
import BlogsCard from './BlogsCard';
import HistoryCard from './HistoryCard';

const ReadingHistoryPage = () => {

    const historyState = useSelector((state) => state.blog.history);
    console.log("State on History Page: ", historyState);

    return (
        <div className='lg:px-20 md:px-2 px-2'>
            
            <div className='mt-16 mx-auto mb-20'>
                {historyState
                    .sort((a, b) => a.historyPosition - b.historyPosition)
                    .map((blog, index) => (
                        <HistoryCard key={index} blog={blog} />
                    ))}
            </div>
        </div>
    );
};

export default ReadingHistoryPage;