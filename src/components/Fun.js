import React from 'react';

function Fun() {



    function test1() {
        console.log('running');
        console.log('fun');
        console.log('clicked');
        // let count = 0;
        let i = 0;
        setInterval(() => {

            let arr = [
                'https://fast.com/',
                'https://youtube.com/',
                'https://codewithharry.com/'
            ]
            arr.forEach(function (element) {
    
                window.open(element);
                // console.log(index);
            })
            console.log(i, 'running');
            i++;
        }, 5000);
    }


    return (
        <>
            <div className='container'>
                <button onClick={test1} className="btn btn-primary  p-2 px-4 ">Fun</button>
            </div>
        </>
    );
}

export default Fun;
