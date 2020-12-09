import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
    h1 {
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        color: #282538;
    }
    span {
        font-weight: 400;
    }
`

function Header() {
  return (
    <HeaderStyles>
        <h1>Github <span>Jobs</span></h1>
    </HeaderStyles>
  )
}

export default Header
