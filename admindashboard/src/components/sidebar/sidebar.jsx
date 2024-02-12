import React, { useState } from 'react';
import './sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhoneIcon from '@mui/icons-material/Phone';
import StarIcon from '@mui/icons-material/Star';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import HouseIcon from '@mui/icons-material/House';
import PaidIcon from '@mui/icons-material/Paid';
import MessageIcon from '@mui/icons-material/Message';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleIconClick = (iconName) => {
        setSelectedIcon(iconName);
    };

    return (
        <div className="sidebar">
            <div className="leftsidecontent">
                <Link to="/" style={{ textDecoration: 'none' }} />
                <div className="center">
                    <ul>
                        <li onClick={() => handleIconClick('Dashboard')}>
                            <DashboardIcon className="icon" />
                            <span>{selectedIcon === 'Dashboard' && 'Dashboard'}</span>
                        </li>

                        <Link to="/application" style={{ textDecoration: 'none' }}>
                            <li onClick={() => handleIconClick('Application')}>
                                <StarIcon className="icon" />
                                <span>{selectedIcon === 'Application' && 'Application'}</span>
                            </li>
                        </Link>

                        <Link to="/tenants" style={{ textDecoration: 'none' }}>
                            <li onClick={() => handleIconClick('Tenants')}>
                                <HouseIcon className="icon" />
                                <span>{selectedIcon === 'Tenants' && 'Tenants'}</span>
                            </li>
                        </Link>

                        <Link to="/maintenance" style={{ textDecoration: 'none' }}>
                            <li onClick={() => handleIconClick('Maintenance')}>
                                <MapsHomeWorkIcon className="icon" />
                                <span>{selectedIcon === 'Maintenance' && 'Maintenance'}</span>
                            </li>
                        </Link>

                        <Link to="/transaction" style={{ textDecoration: 'none' }}>
                            <li onClick={() => handleIconClick('Transaction')}>
                                <PaidIcon className="icon" />
                                <span>{selectedIcon === 'Transaction' && 'Transaction'}</span>
                            </li>
                        </Link>

                        <Link to="/message" style={{ textDecoration: 'none' }}>
                            <li onClick={() => handleIconClick('Message')}>
                                <MessageIcon className="icon" />
                                <span>{selectedIcon === 'Message' && 'Message'}</span>
                            </li>
                        </Link>

                        <Link to="/support" style={{ textDecoration: 'none' }}>
                            <li onClick={() => handleIconClick('Support')}>
                                <PhoneIcon className="icon" />
                                <span>{selectedIcon === 'Support' && 'Support'}</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            {selectedIcon && (
                <div className="selectedIconName">
                    You clicked: {selectedIcon}
                </div>
            )}
        </div>
    );
};

export default Sidebar;
