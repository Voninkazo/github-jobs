import React, { useState } from 'react';
import styled from 'styled-components';

const FromStyles = styled.form`
    display: flex;
	grid-gap: 10px;
	justify-content: space-between;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 4px;
	input {
        background: none;
        padding-top: 19px;
        padding-right: 42px;
        padding-bottom: 22px;
		border: none;
        width: 100%;
        font-size: 12px;
        line-height: 14px;
        color: #B9BDCF;
        outline: none;
    }
    button {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
        padding: 18px 42px;
        background-color:#1E86FF;
        border: none;
    }
`

export default function Header() {
    const [searchInput,setSearchInput]= useState('');
  return (
    <header>
        <FromStyles>
            <input 
            type="text" 
            value={searchInput} 
            onChange={e => setSearchInput(e.target.value)}
            placeholder="Title, companies, expertise or benefits"
            />
            <button>Search</button>
        </FromStyles>
    </header>
  )
}
