import React from 'react'
//importing our assets
import avatarImage from '../assets/images/avatar.jpg';

export default function WidgetLarge() {
const Button = ({type}) => {
    return <button className={`widgetLargeButton ${type}`}>{type}</button>
}

    return (
        <div className="widget widgetLarge">
            <h3> Latest Transactions</h3>
            <table className="widgetLargeTable">
                <tr className="widgetLargeTr">
                    <th >Customer</th>
                    <th >Date</th>
                    <th >Amount</th>
                    <th >Status</th>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src={avatarImage} alt='user avatar'/>
                        <span className="widgetLargeName">Susan Carol</span>
                    </td>
                    <td>2 June 2021</td>
                    <td>$122.00</td>
                    <td>
                        <Button type="Approved" className="widgetLargeButton"/>
                    </td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src={avatarImage} alt='user avatar'/>
                        <span className="widgetLargeName">John Doe</span>
                    </td>
                    <td>22 June 2021</td>
                    <td>$102.00</td>
                    <td>
                        <Button type="Declined" className="widgetLargeButton"/>
                    </td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src={avatarImage} alt='user avatar'/>
                        <span className="widgetLargeName">Jane Carol</span>
                    </td>
                    <td>12 June 2021</td>
                    <td>$122.00</td>
                    <td>
                        <Button type="Pending" className="widgetLargeButton"/>
                    </td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src={avatarImage} alt='user avatar'/>
                        <span className="widgetLargeName">James Burton</span>
                    </td>
                    <td>23 June 2021</td>
                    <td>$150.00</td>
                    <td>
                        <Button type="Approved" className="widgetLargeButton"/>
                    </td>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src={avatarImage} alt='user avatar'/>
                        <span className="widgetLargeName">James Dean</span>
                    </td>
                    <td>1 June 2021</td>
                    <td>$82.00</td>
                    <td>
                        <Button type="Pending" className="widgetLargeButton"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}
