import React from 'react'
//importing our assets
import VisibilityIcon from '@material-ui/icons/Visibility';
import userImage from '../assets/images/avatar.jpg';

export default function WidgetSmall() {
    return (
        <div className="widget widgetSmall">
            <h2>New Join Member</h2>
            <ul className="widgetList">
                <li className="widgetItem">
                    <img src={userImage} alt="our users avatar" className="widgetImage"/>
                    <div className="widgetUser">
                        <span className="widgetUsername">Anna Keller</span>
                        <span className="widgetUserTitle">Software Engineer</span>
                    </div>
                    <button>
                            <VisibilityIcon className="widgetIcon"/>
                            Display
                    </button>
                </li>
                <li className="widgetItem">
                    <img src={userImage} alt="our users avatar" className="widgetImage"/>
                    <div className="widgetUser">
                        <span className="widgetUsername">Anna Keller</span>
                        <span className="widgetUserTitle">Software Engineer</span>
                    </div>
                    <button>
                            <VisibilityIcon className="widgetIcon"/>
                            Display
                    </button>
                </li>
                <li className="widgetItem">
                    <img src={userImage} alt="our users avatar" className="widgetImage"/>
                    <div className="widgetUser">
                        <span className="widgetUsername">Anna Keller</span>
                        <span className="widgetUserTitle">Software Engineer</span>
                    </div>
                    <button>
                            <VisibilityIcon className="widgetIcon"/>
                            Display
                    </button>
                </li>
                <li className="widgetItem">
                    <img src={userImage} alt="our users avatar" className="widgetImage"/>
                    <div className="widgetUser">
                        <span className="widgetUsername">Anna Keller</span>
                        <span className="widgetUserTitle">Software Engineer</span>
                    </div>
                    <button>
                            <VisibilityIcon className="widgetIcon"/>
                            Display
                    </button>
                </li>
                <li className="widgetItem">
                    <img src={userImage} alt="our users avatar" className="widgetImage"/>
                    <div className="widgetUser">
                        <span className="widgetUsername">Anna Keller</span>
                        <span className="widgetUserTitle">Software Engineer</span>
                    </div>
                    <button>
                            <VisibilityIcon className="widgetIcon"/>
                            Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
