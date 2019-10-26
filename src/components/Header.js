import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrap>
      <Inner>
        <Title>YongHoonJJo's Theme</Title>
      </Inner>
    </Wrap>
  )
}

export default Header

const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.18);
  background-color: #fff;
  z-index: 1000;
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  width: 1140px;
  height: 100%;
  margin: 0 auto;
`

const Title = styled.span`
  font-size: 18px;
  font-weight: bolder;
`