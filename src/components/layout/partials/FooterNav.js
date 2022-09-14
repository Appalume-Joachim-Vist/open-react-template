import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Mailto from '../../../utils/Mailto';
import Callto from '../../../utils/Callto';


const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Mailto email="info@appalume.se" subject="Generella frågor" body="Hej,">info@appalume.se</Mailto>
        </li>
        <li>
          <Callto number="+46708376258">+46 (0) 708 376 258</Callto>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;