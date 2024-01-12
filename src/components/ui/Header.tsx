import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  StyledBoxIconShopCart,
  StyledBoxLogo,
  StyledBoxMobileMenu,
  StyledBoxUser,
  StyledBtnLogin,
  StyledHeader,
  StyledListItem,
  StyledListMenu,
  StyledNav,
  StyledPName,
  StyledRow,
  StyledSpanIcon,
} from './Header.css';
import { FaShopify } from 'react-icons/fa';
import { Endpoint } from '../../types/request';
import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiMenuAltLeft } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/userSlice';
import { RootState } from '../../store';
import ThemeToggler from './ThemeToggler';
import { useMutation } from '@tanstack/react-query';
import { logout as logoutRequest } from '../../api/user';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedUser = useSelector((state: RootState) => state.user.loggedUser);
  const hasUserEmployeePrivileges =
    loggedUser && loggedUser.role?.name !== 'client';
  const itemsQuantity = useSelector(
    (state: RootState) => state.createOrder.itemsQuantity
  );

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const logoutMutation = useMutation({
    mutationFn: logoutRequest,
    onSuccess: () => {
      dispatch(logout());
      navigate('/');
    },
  });

  return (
    <StyledHeader>
      <StyledRow>
        <StyledBoxLogo>
          <Link to='/'>
            <FaShopify size={45} color='white' />
          </Link>
        </StyledBoxLogo>
        <StyledBoxUser>
          {loggedUser && (
            <StyledPName>
              {loggedUser.first_name} {loggedUser.last_name}
            </StyledPName>
          )}
          <Link to={`/${Endpoint.Orders}/new`}>
            <StyledBoxIconShopCart>
              <AiOutlineShoppingCart size={20} />
              <StyledSpanIcon>{itemsQuantity}</StyledSpanIcon>
            </StyledBoxIconShopCart>
          </Link>
        </StyledBoxUser>
        <StyledBoxMobileMenu>
          {!isOpen ? (
            <BiMenuAltLeft size={30} onClick={() => setIsOpen(true)} />
          ) : (
            <AiOutlineClose
              color='white'
              size={30}
              onClick={() => setIsOpen(false)}
            />
          )}
        </StyledBoxMobileMenu>
        <StyledNav isOpen={isOpen}>
          <StyledListMenu>
            <StyledListItem>
              <Link
                onClick={handleLinkClick}
                to={`/${Endpoint.Products}?page=1`}
              >
                Products
              </Link>
            </StyledListItem>

            {loggedUser && (
              <StyledListItem>
                <Link
                  onClick={handleLinkClick}
                  to={`/${Endpoint.Orders}?page=1`}
                >
                  Orders
                </Link>
              </StyledListItem>
            )}
            {hasUserEmployeePrivileges && (
              <StyledListItem>
                <Link
                  onClick={handleLinkClick}
                  to={`/${Endpoint.Users}?page=1`}
                >
                  Users
                </Link>
              </StyledListItem>
            )}
            {hasUserEmployeePrivileges && (
              <StyledListItem>
                <Link
                  onClick={handleLinkClick}
                  to={`/${Endpoint.Sales}?page=1`}
                >
                  Sales
                </Link>
              </StyledListItem>
            )}
            {loggedUser ? (
              <StyledListItem>
                <StyledBtnLogin
                  onClick={() => logoutMutation.mutate()}
                  disabled={logoutMutation.isPending}
                >
                  Logout
                </StyledBtnLogin>
              </StyledListItem>
            ) : (
              <StyledListItem>
                <StyledBtnLogin
                  onClick={() => {
                    navigate('/login');
                    handleLinkClick();
                  }}
                >
                  Log in
                </StyledBtnLogin>
              </StyledListItem>
            )}
          </StyledListMenu>
        </StyledNav>
        <ThemeToggler />
      </StyledRow>
    </StyledHeader>
  );
};

export default Header;
