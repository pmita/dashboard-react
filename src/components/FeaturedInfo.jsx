import React from 'react';
//importing our assets
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <h4>
                    Revenue
                </h4>
                <div className="featuredMoneyContainer">
                    <h1>$2000</h1>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownwardIcon className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>       

            <div className="featuredItem">
                <h4 className="featuredTitle">
                    Sales
                </h4>
                <div className="featuredMoneyContainer">
                    <h1>$5000</h1>
                    <span className="featuredMoneyRate">
                        +5.4 <ArrowUpwardIcon className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>     

            <div className="featuredItem">
                <h4>
                    Cost
                </h4>
                <div className="featuredMoneyContainer">
                    <h1>$1000</h1>
                    <span className="featuredMoneyRate">
                        -0.4 <ArrowDownwardIcon className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>            
        </div>
    );
}
