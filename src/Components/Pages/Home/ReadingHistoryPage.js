import React from 'react';
import { useSelector } from 'react-redux';
import BlogsCard from './BlogsCard';
import HistoryCard from './HistoryCard';

const ReadingHistoryPage = () => {

    const historyState = useSelector((state) => state.blog.history);
    console.log("State on History Page: ", historyState);

    return (
        <div className='lg:px-20 md:px-2 px-2'>
            {
                historyState.length > 0 ?
                    <>
                        <div className='mt-16 mx-auto mb-20'>
                            {historyState
                                .sort((a, b) => a.historyPosition - b.historyPosition)
                                .map((blog, index) => (
                                    <HistoryCard key={index} blog={blog} index={index} />
                                ))}
                        </div>
                    </>

                    :

                    <>
                        <h1 className='md:text-3xl text-xl mt-64 text-gray-600 text-center font-bold'>No History Found.. Please Read Some Of Our Blogs</h1>
                    </>
            }
        </div>
    );
};

export default ReadingHistoryPage;