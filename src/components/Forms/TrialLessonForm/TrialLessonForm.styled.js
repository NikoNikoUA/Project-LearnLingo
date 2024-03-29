import styled from "styled-components";
import { ErrorMessage, Field } from "formik";

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 20px;
  top: 20px;

  & > svg {
    stroke: ${(props) => props.theme.colors.textColor};
    transition: all 250ms ease;
  }

  transition: all 250ms ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.themeOrange};

    & > svg {
      stroke: white;
    }
  }
`;

export const MainHeading = styled.h1`
  font-weight: 500;
  font-size: 40px;
  margin-bottom: 20px;

  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.textColor};
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  color: rgba(18, 20, 23, 0.8);

  margin-bottom: 20px;
`;

export const TeacherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 14px;
  margin-bottom: 40px;
`;

export const Img = styled.img`
  border-radius: 100px;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33333;
  color: ${(props) => props.theme.colors.textHoverColor};
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textColor};
`;

export const Question = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.33333;
  color: ${(props) => props.theme.colors.textColor};

  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;

  margin-bottom: 40px;
  margin-top: 35px;
`;

export const Label = styled.label`
  position: absolute;
  top: 18px;
  left: 16px;
  transition: 0.3s;
  pointer-events: none;
  color: ${(props) => props.theme.colors.textColor};
`;

export const InputField = styled(Field)`
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  padding: 16px 16px 16px 18px;
  width: 100%;
  height: 54px;
  outline: none;

  font-weight: 400;
  line-height: 1.375;
  color: ${(props) => props.theme.colors.textColor};
  transition: all 250ms ease;
  background-color: white;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.themeOrange};

    & + ${Label} {
      color: orange;
    }
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.themeOrange};
    background-color: transparent;

    & + ${Label} {
      color: ${(props) => props.theme.colors.themeOrange};
      top: -10px;
      font-size: 14px;
      background-color: white;
      border-radius: 10px;
      padding: 4px;
    }
  }

  &:not(:placeholder-shown) + ${Label} {
    color: ${(props) => props.theme.colors.themeOrange};
    top: -10px;
    font-size: 14px;
    background-color: white;
    border-radius: 10px;
    padding: 4px;
  }
`;

export const DIV = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BtnBook = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0px;

  border-radius: 12px;
  border: none;
  padding: 16px 215px;
  width: 472px;
  height: 60px;

  font-weight: 700;
  font-size: 18px;
  line-height: 1.55556;
  color: ${(props) => props.theme.colors.textColor};
  background: ${(props) => props.theme.colors.themeOrange};

  transition: all 250ms ease;

  &:hover {
    background: ${(props) => props.theme.colors.themeHoverOrange};
  }
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  top: -18px;
  right: 0;
  color: red;
  font-size: 16px;
`;
