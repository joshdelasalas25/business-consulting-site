import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #000d14;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px){ 
      height: 80%

  }
`;


export const Logo = styled.h1`
    text-align: center;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 50px;

    @media screen and (max-width: 480px) {
        font-size: 32px;
        margin-top: 8px;
    }
`;

export const Subtitle = styled.span`
    color: #000d14;
    font-size: 30px;
    text-align: center;
    margin-bottom: -50px;
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #ffff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;



export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px){
        padding: 10px
    }
`;

export const Form = styled.form`
    background: #C0C0C0;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 50px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px){
        padding: 32px  32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #000d14;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #000d14;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 24px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #00bfff;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

export const TextLink = styled(Link)`
    text-align: center;
    color: #000d14;
    text-decoration: none;
    margin-top: 24px;
    font-size: 14px;

    &:hover {
        color: #01bf71;
        transition: 0.3s ease-out
    }

`;

export const Text = styled.span`
    color: #000d14;
    margin-top: 24px;
    font-size: 14px;
`;