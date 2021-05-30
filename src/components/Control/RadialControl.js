import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
    NavItem,
    NavLink,
    Nav,
  } from "reactstrap";

function RadialControl() {
    const controlAttr = [
        'radial-nav-item-prev-2',
        'radial-nav-item-prev-1',
        'radial-nav-item-active',
        'radial-nav-item-next-1',
        'radial-nav-item-next-2',
        '',
        '',
        ''
    ];
    const SuffleArr = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
        
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        return array;
    }
    const onRadialBtnClick = (direction) => {
        if( direction === 'left' ) {
            const extra = extraAttr.pop();
            setExtraAttr([
                extra,
                ...extraAttr
            ]);
        } else {
            const extra = extraAttr.shift();
            setExtraAttr([
                ...extraAttr,
                extra
            ]);
        }
    }

    const [extraAttr, setExtraAttr] = useState(controlAttr);
    const [radialShow, setRadialShow] = useState(false);
    const showControl = useMemo(() => {
        const controlArr = [
            {itemName:'Food', itemImg:'icon-food.png', itemLink:'/web/frontend/default/directory'},
            {itemName:'Farming', itemImg:'icon-farming.png', itemLink:'/web/frontend/default/profile'},
            {itemName:'Accountancy', itemImg:'icon-accountancy.png', itemLink:'/web/site/invite'},
            {itemName:'Music', itemImg:'icon-music.png', itemLink:'/web/site/directory'},
            {itemName:'Finance', itemImg:'icon-finance.png', itemLink:'/web/site/world'},
            {itemName:'Fashion', itemImg:'icon-fashion-no.png', itemLink:'/web/site/adv'},
            {itemName:'Business', itemImg:'icon-business.png', itemLink:'/web/frontend/default/contact'},
            {itemName:'Legal', itemImg:'icon-legal-no.png', itemLink:'/web/site/profile'}
        ];
        return SuffleArr(controlArr);
    }, []);

    const onShowRadialControl = () => {
        setRadialShow(!radialShow);
    }
  return (
    <nav className={radialShow?"radial-nav active":"radial-nav"} >
        <div className="radial-nav-ellipsis">
            <img
                alt="..."
                onClick={onShowRadialControl}
                src={require("assets/img/theme/directory-show-menu.png").default}
            />
        </div>
        <div className="radial-nav-navigation-holder">
            <div type="button" className="radial-nav-btn-prev" onClick={() => onRadialBtnClick('left')}></div>
            <div type="button" className="radial-nav-btn-next" onClick={() => onRadialBtnClick('right')}></div>
            <NavLink className="radial-nav-ellipsis3"/>
            <NavLink className="radial-nav-ellipsis4" />
            <NavLink className="radial-nav-ellipsis2" />
            <NavLink className="radial-nav-ellipsis5" onClick={onShowRadialControl}>
                <span>×</span>
            </NavLink>

            <Nav className="radial-item-wrap" navbar>
                {showControl.map((item, idx) => 
                    <NavItem className={'radial-nav-item '+extraAttr[idx]} key={idx}>
                        <NavLink
                        to={item.itemLink}
                        tag={Link}
                        >
                            <span>
                            <img
                                alt={item.itemName}
                                src={require("assets/img/theme/"+item.itemImg).default}
                                />
                            </span>
                            <span className="radial-nav-item-text">{item.itemName}</span>
                        </NavLink>
                    </NavItem>
                )}
            </Nav>
        </div>
    </nav>
  );
}

export default RadialControl;
