import styled from 'styled-components';

import banner from '../../assets/home-1.jpg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.div`
    width: 100%;
    height: 30px;
    background-color: var(--color-primary);
`;

export const Content = styled.div`
    width: 100%;
    background-image: url(${banner});
    background-size: cover;
    height: calc(100vh - 30px);

    @media(max-width: 1300px) {
        width: 100%;
    }
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 390px;
    padding: 40px 0 0;
    height: 100%;
    background-color: var(--color-login);
    box-shadow: 3px 0 10px 0 rgba(0, 0, 0, 0.2);

    > img {
        width: 300px;
        margin: 25px auto 9px auto;
    }

    > h2 {
        margin-top: 10px;
        margin-bottom: 40px;
        font-size: 40px;
        text-align: center;
        font-weight: 500;
        color: var(--color-text);
    }

    @media(max-width: 720px) {
        width: 100%;
    }
`;

export const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0 60px 0;
    background-color: var(--color-login-box);
    
    @media(max-width: 720px) {
        justify-content: center;
        align-items: center;
    }
`;

export const Title = styled.div`
    > div {
        display: flex;
        flex-direction: column;
    }

    > div p {
        color: var(--color-text);
        font-size: 20px;
        margin-top: 8px;
        margin-left: 13%;
    }

    @media(max-width: 720px) {
        > div {
            width: 285px;
        }
        > div p {
            margin-left: 0;
        }
    }
`;

export const Error = styled.div`
    display: none;
    
    > p {
        color: var(--color-error);
        min-height: 35px;
        font-weight: 700;
        line-height: 35px;
        margin-left: 13%;
    }
`;

export const LoginInfo = styled.form`
    display: flex;
    flex-direction: column;
    

    > input {
        font-size: 12px;
        color: var(--color-text-input);
        padding: 20px 6px;
        width: 280px;
        height: 25px;
        margin-top: 30px;
        margin-left: 13%;
        border: 1px solid var(--color-text-input);
        border-radius: 5px;

        ::placeholder {
          font-size: 12px;
          color: var(--color-text);
        }
    }

    > div {
      display: flex;
      justify-content: space-between;
      margin-top: 25px;

      > input {
        font-size: 12px;
        color: var(--color-text-input);
        margin-left: 13%;
        margin-right: 5px;
        padding: 20px 6px;
        height: 25px;
        width: 200px;
        border: 1px solid var(--color-text-input);
        border-radius: 5px;

        ::placeholder {
          font-size: 12px;
          color: var(--color-text);
        }

        @media(max-width: 720px) {
            width: 250px;
            margin-right: 5px;
        }
      }
    }

`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  margin: auto;
  margin-right: 60px;
  outline: none;
  border: none;

  p {
    color: var(--color-white);
    text-decoration: none;
    padding: 10px;
    font-size: 13px;
    background: var(--color-primary);
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
`;