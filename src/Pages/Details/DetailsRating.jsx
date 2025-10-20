import React from 'react';
import { Bar, BarChart } from 'recharts';

const DetailsRating = ({ratings}) => {
    console.log(ratings);
    return (
        <div>
            <BarChart width={400} height={400} data={ratings}>
                <Bar dataKey={"name"}></Bar>
            </BarChart>
        </div>
    );
};

export default DetailsRating;