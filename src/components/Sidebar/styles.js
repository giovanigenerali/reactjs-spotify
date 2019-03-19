import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  width: 20%;
  min-width: 200px;
  max-width: 200px;
  background: #121212;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    padding: 25px;
    overflow: auto;
    overflow-y: auto;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  margin-top: 25px;

  &:first-child {
    margin: 0;
  }

  li {
    a {
      color: inherit;
      text-decoration: none;
      font-size: 13px;
      line-height: 32px;
      font-weight: ${props => (props.main ? 'bold' : 'normal')};

      &:hover {
        color: #fff;
      }
    }

    span {
      font-size: 11px;
      text-transform: uppercase;
      line-height: 22px;
      letter-spacing: 1.6px;
      font-weight: 600;
      color: #fff;
    }
  }
`;

export const NewPlaylist = styled.button`
  background: transparent;
  border: 0;
  border-top: 1px solid #282828;
  font-size: 13px;
  color: #b3b3b3;
  display: flex;
  align-items: center;
  padding: 15px 25px;
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  img {
    margin-right: 10px;
  }
`;
