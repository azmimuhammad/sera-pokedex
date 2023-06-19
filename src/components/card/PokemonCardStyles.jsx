import styled from "styled-components"

export const StyledCard = styled.div`
  border-radius: 5px;
  padding: 30px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    border: 1px solid #f2f2f2;
  }

  .card-image-wrapper {
    border-radius: 5px;
    background-color: #f2f2f2;
    width: 100%;
    aspec-ratio: 1/1;
    display: flex;
    justify-content: center;

    .card-image {
      width: 80%;
      aspec-ratio: 1/1;
    }
  }

  .card-number {
    color: #c6c6c6;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .card-title {
    font-weight: 500;
    font-size: 26px;
  }
`

export const PokemonType = styled.div`
  display: flex;
  gap: 10px;

  .type {
    color: #fff;
    background: #fd7d24;
    border-radius: 5px;
    width: max-content;
    padding: 3px 10px;
  }
`
