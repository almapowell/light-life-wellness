import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 30px;
    width: 500px;

    div {
        display: flex;
        justify-content: space-evenly;
    }
`;

export const LinkStyling = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-size: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid transparent;
    transition: .6s;

    &.selected {
        border-bottom: 1px solid black;
    }
    &:hover {
        border-bottom: 1px solid black;
    }
`;

export const HomeLinkStyling = styled(LinkStyling)`
    font-size: 34px;
    margin-bottom: 20px;
    border-bottom: 2px solid transparent;
    &.selected {
        border-bottom: 2px solid black;
    }
    &:hover {
        border-bottom: 2px solid black;
    }
`;