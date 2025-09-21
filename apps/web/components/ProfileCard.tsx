import styled from "styled-components";

export const ProfileCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 1.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  justify-content: space-around;
  display: flex;
  width: 80%;
  height: 150px;
  &:hover {
    transform: scale(1.01);
    transition: transform 0.2s ease;
    border-bottom: 10px solid ${({ theme }) => theme.colors.primary}
  }
  margin-top: 20px;
`;