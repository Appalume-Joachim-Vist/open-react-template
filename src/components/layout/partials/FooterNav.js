import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Mailto from '../../../utils/Mailto';


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
          <Mailto email="info@appalume.se" subject="Generella frågor" body="Hej,">Kontakt</Mailto>
        </li>
        {/* <li>
          <Link to="#0">Om oss</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default FooterNav;