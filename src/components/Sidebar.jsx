import React from 'react'
//importing our Material UI icons
import LineStyleIcon from '@material-ui/icons/LineStyle';
import TimelineIcon from '@material-ui/icons/Timeline';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import StorefrontIcon from '@material-ui/icons/Storefront';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import BarChartIcon from '@material-ui/icons/BarChart';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import AssessmentIcon from '@material-ui/icons/Assessment';

export default function Sidebar() {
    return (
        <aside>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3>Dashboard</h3>

                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyleIcon className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3>Quick Menu</h3>

                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PermIdentityIcon className="sidebarIcon"/>
                            Users
                        </li>
                        <li className="sidebarListItem">
                            <StorefrontIcon className="sidebarIcon"/>
                            Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyIcon className="sidebarIcon"/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChartIcon className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3>Notifications</h3>

                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineIcon className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedIcon className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineIcon className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3>Staff</h3>

                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutlineIcon className="sidebarIcon"/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <AssessmentIcon className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>


            </div>
        </aside>
    );
}
