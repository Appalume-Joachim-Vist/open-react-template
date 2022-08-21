import React from 'react';
import classNames from 'classnames';
import {AiOutlineLinkedin, AiOutlineFacebook, } from 'react-icons/ai';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://www.facebook.com/appalume/">
            <AiOutlineFacebook size={28}/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/appalume/">
            <AiOutlineLinkedin size={28}/>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterSocial;