import React from 'react';
import './chart.css';
// import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { userData } from '../../dummyData'; 

const Chart = ({title, data, dataKey, grid}) => {


  
    return (
        <div className="chart">
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey='name'/>
                    <Line type='monotone' dataKey={dataKey} stroke='#76c7a9'/>
                    <Tooltip/>
                   {grid && <CartesianGrid stroke='#e0dfdf'/> }
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )

}

export default Chart