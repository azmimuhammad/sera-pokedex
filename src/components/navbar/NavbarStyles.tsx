import styled from "styled-components"

export const StyledNavbar = styled.div`
  background: #ffdb4c;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  padding: 15px 7%;
  display: flex;
  gap: 20px;
  font-family: Roboto;

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 30px;
    font-weight: 600;

    text-shadow: -1px -1px #fff, 1px 1px #fff, 1px 1px #fff;
  }
`
