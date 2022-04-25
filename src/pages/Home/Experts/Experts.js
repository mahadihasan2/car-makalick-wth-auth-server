import React from 'react';
import expart1 from '../../../images/experts/expert-1.jpg';
import expart2 from '../../../images/experts/expert-2.jpg';
import expart3 from '../../../images/experts/expert-3.jpg';
import expart4 from '../../../images/experts/expert-4.jpg';
import expart5 from '../../../images/experts/expert-5.jpg';
import expart6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';


const experts = [
    { id: 1, name: "Jhon Villa", price: "1054", img: expart1 },
    { id: 2, name: "Jhon Villa", price: "1054", img: expart2 },
    { id: 3, name: "Jhon Villa", price: "1054", img: expart3 },
    { id: 4, name: "Jhon Villa", price: "1054", img: expart4 },
    { id: 5, name: "Jhon Villa", price: "1054", img: expart5 },
    { id: 6, name: "Jhon Villa", price: "1054", img: expart6 },
]
const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-primary'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}

                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;