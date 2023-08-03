import React from 'react';
import { ThreeCircles, RotatingLines } from 'react-loader-spinner';





const Preloader = () => {

    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };



    return (

        <div className='w-full h-screen mx-auto text-center' style={style}>
            <div className='flex justify-center items-center lg:mt-[300px] md:mt-[450px] mt-[250px]'>

                <RotatingLines
                    strokeColor="gray"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="80"
                    visible={true}
                />
            </div>
        </div>
    );
};

export default Preloader;