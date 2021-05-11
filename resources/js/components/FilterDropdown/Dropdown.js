import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const DropdownMenu = ({ data = [], title, add, filterKey}) => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        let height = el.offsetHeight;
        setMenuHeight(height);
    }

    const DropdownItem = (props) => {
        return (
            <a className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button"> {props.leftIcon} </span>

                {props.children}

                <span className="icon-right"> {props.rightIcon} </span>
            </a>
        );
    }

    const items = data.map((item) => {
        let title = item.category || item.type;
        return (
            <span key={item.id} onClick = {() => add(filterKey, item.id)} >
                <DropdownItem>
                    <span> { title } </span>
                </DropdownItem>
            </span>
        );
    });

    return (
        <div className="dropdown-filter" style={{ height: menuHeight }}>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem
                        rightIcon={ <i className="fa fa-angle-double-down" aria-hidden="true"></i>}
                        goToMenu="filter"
                    >
                        {title}
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'filter'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem
                        leftIcon={<i className="fa fa-angle-double-left" aria-hidden="true"></i>}
                        goToMenu="main"
                    >
                    </DropdownItem>
                    {items}
                </div>
            </CSSTransition>
        </div>
    );
}

export default DropdownMenu;
