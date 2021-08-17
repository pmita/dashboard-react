import React from 'react';
//importing our components
import FeaturedInfo from '../components/FeaturedInfo';
import Chart from '../components/Chart';
//importing our assets
import {userData} from '../assets/data/ChartData';

export default function Home() {
    return (
        <section className="home">
            <FeaturedInfo />
            <Chart 
                   title="User Analytics"
                   data = {userData}
                   dataKey = "Active User"
                   grid = {true} 
            />
        </section>
    )
}
