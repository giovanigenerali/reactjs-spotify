import styled, { css } from 'styled-components';

import { Spinner } from '../../components/Loading/styles';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  overflow: auto;
  overflow-y: auto;

  ${Spinner} {
  }

  ${props => props.loading
    && css`
      height: 100%;
      justify-content: center;
      align-items: center;
    `}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  img {
    height: 200px;
    width: 200px;
  }

  div {
    margin-left: 20px;

    span {
      font-size: 14px;
      letter-spacing: 1.11px;
      font-weight: 300;
    }

    h1 {
      margin-top: 10px;
      font-size: 48px;
    }

    p {
      margin-top: 0;
      color: #b3b3b3;
      letter-spacing: 1.11px;
      text-transform: uppercase;

      span {
        font-size: initial;
        font-weight: initial;
        margin-right: 3px;
      }
    }

    button {
      background: #1db854;
      height: 32px;
      border-radius: 16px;
      color: #fff;
      line-height: 32px;
      padding: 0 35px;
      border: 0;
      margin-top: 10px;
      font-size: 12px;
      letter-spacing: 1.11px;
      text-transform: uppercase;
    }
  }
`;

export const SongList = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 20px;
  min-width: 500px;

  thead th {
    font-size: 11px;
    color: #b3b3b3;
    letter-spacing: 1.11px;
    font-weight: normal;
    text-transform: uppercase;
    padding: 5px 10px;

    &:last-child {
      text-align: right;
    }
  }
`;

export const SongItem = styled.tr`
  td {
    border-top: 1px solid #282828;
    font-size: 13px;
    padding: 0 10px;
    line-height: 40px;
    background: ${props => (props.selected ? '#282828' : 'transparent')};
    color: ${props => (props.playing ? '#1db854' : '#fff')};

    &:first-child {
      width: 80px;
      text-align: right;
    }

    &:last-child {
      text-align: right;
    }
  }

  &:hover td {
    background: #282828;
  }
`;
