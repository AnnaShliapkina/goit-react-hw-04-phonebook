import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
export const Text = styled.span`
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  height: 40px;
  width: 400px;
  padding: 0 10px 0 10px;
  &::placeholder {
    font-size: 12px;
  }
`;

export const AddContactBtn = styled.button`
  margin-left: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  background-color: #756565;
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :hover,
  :focus {
    background-color: #6d5959;
  }
`;
