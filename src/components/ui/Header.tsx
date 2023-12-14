import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledBoxIconShopCart,
  StyledBoxLogo,
  StyledBoxUser,
  StyledHeader,
  StyledPName,
  StyledRow,
  StyledSpanIcon,
} from './Header.css';
import { FaShopify } from 'react-icons/fa';
import { Endpoint } from '../../types/request';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const loggedUser = true;
  return (
    <StyledHeader>
      <StyledRow>
        <StyledBoxLogo>
          <Link to='/'>
            <FaShopify size={45} />
          </Link>
        </StyledBoxLogo>
        <StyledBoxUser>
          {loggedUser && <StyledPName>User name</StyledPName>}
          <Link to={`/${Endpoint.Orders}/new`}>
            <StyledBoxIconShopCart>
              <AiOutlineShoppingCart size={20} />
              <StyledSpanIcon>{4}</StyledSpanIcon>
            </StyledBoxIconShopCart>
          </Link>
        </StyledBoxUser>
        <div className='cursor-pointer text-white lg:hidden'>
          {!isOpen ? (
            <BiMenuAltLeft size={30} onClick={() => setIsOpen(true)} />
          ) : (
            <AiOutlineClose
              color='white'
              size={30}
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </StyledRow>
    </StyledHeader>
  );
};

export default Header;
