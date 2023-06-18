import styled from "styled-components"

export const DetailStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 3% 7%;

  .title {
    display: flex;
    justify-content: center;
    gap: 15px;
    font-weight: 500;
    font-size: 32px;
    margin-bottom: 30px;

    .number {
      color: #c6c6c6;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-left: 20px;
  }

  .poke-detail {
    display: grid;
    grid-template-columns: 30% auto;

    .charasteristic {
      display: flex;
      flx-wrap: wrap;

      .char-item {
        flex-grow: 1;
        font-size: 20px;
      }
    }
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

  .label,
  .subtitle {
    font-weight: 500;
  }

  .subtitle {
    font-size: 20px;
  }

  .sub-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

export const PokemonStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .stat {
    display: grid;
    grid-template-columns: 10% 20% auto;

    .progress {
      border: 1px solid #d8d6d6;
    }

    .value {
      padding-left: 10px;
      color: #b7b5b5;
    }
  }
`

export const Progress = styled.div`
  height: 100%;
  width: ${(props: {value: number}) => props.value || 0}%;
  background: ${(props: {value: number}) =>
    props.value < 30 ? "#ef5350" : props.value >= 70 ? "#76ff03" : "#ffeb3b"};
`
