import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <Wrap>
      <Item to='/'>Home</Item>
      <Item to='/radio'>Radio</Item>
      <Item to='/select'>Select</Item>
    </Wrap>
  );
};

export default Sidebar;

const Wrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 45px;
  left: 0;
  width: 270px;
  height: calc(100% - 45px);
`;

const Item = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 50px;
  cursor: pointer;
`;