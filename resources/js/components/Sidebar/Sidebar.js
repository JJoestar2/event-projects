import React from 'react';

const Sidebar = (props) => {
    return (
        <div className="sidebar h-100">
            {props.children}
        </div>
    );
}

export default Sidebar;
