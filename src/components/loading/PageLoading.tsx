import styled from "styled-components"

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  padding: 10% 0px;
  opacity: .5;

  .logo {
    animation: spin 1s linear infinite;

    @keyframes spin { 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    }
  }
`

const PageLoading = () => {
  return (
    <StyledLoading>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
        alt=""
        width={300}
        className="logo"
      />
    </StyledLoading>
  )
}

export default PageLoading
