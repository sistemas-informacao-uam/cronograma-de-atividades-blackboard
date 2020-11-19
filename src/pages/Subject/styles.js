import styled from 'styled-components';

import { FaHome } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

export const Container = styled.div`
    display: flex;
    height: calc(100% - 90px);

    @media(max-width: 1020px) {
        height: calc(100% - 44px);
    }
`;

export const ArrowIconDown = styled(FiChevronDown)`
    font-size: 12.8;
    color: #555;
    margin-right: 5px;

    &&:hover {
        cursor: pointer;
    }
`;

export const HomeIcon = styled(FaHome)`
  width: 15.5px;
  height: 18px;
  color: #555;

  &&:hover {
    cursor: pointer;
  }
`;


export const Sidebar = styled.aside`
    position: sticky;
    top: 0;
    width: 240px;
    font-size: 12.8px;
    background: var(--color-secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    .divTitleSub {
        display: flex;
        flex-direction: column;
        background-color: var(--color-secondary);
    }

    div {
        width: 100%;
        display: flex;
        background: #555555;
        height: 23px;
        margin-bottom: 16px;

        div {
            margin-left: auto;
            height: inherit;
            width: 40px;
            background: #999999;
        }
    }

    h3 {
        margin-bottom: 16px;
    }

    span {
        font-size: 12.8px;
        margin-left: 25px;
        padding: 8px;
        align-self: flex-start;
        transition: 200ms;
        cursor: pointer;

        &.active, &:hover {
            font-size: 13px;
            font-weight: bold;
        }
    }
`;

export const ActivitiesArea = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;

    .create-activity {
        padding: 14px;
        display: flex;
        margin: 0 auto;
        justify-content: space-around;
        align-items: center;
        width: 80%;
        div {
            display: flex;
            flex-direction: column;
        }

        label {
            margin-bottom: 4px;
            font-weight:bold;
        }
    }

    hr {
        margin: 24px;
    }

    .registered-activities {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: fit-content;
        margin: 0 auto;

        overflow-y: auto;

        &::-webkit-scrollbar,
        &::-webkit-scrollbar-thumb {
            width: 26px;
            border-radius: 13px;
            background-clip: padding-box;
            border: 10px solid transparent;
        }

        &::-webkit-scrollbar-thumb {        
            box-shadow: inset 0 0 0 10px;
        }
    }
`
