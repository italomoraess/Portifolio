import styled from "styled-components";

export const ContainerProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 50px;
    h1{
      font-size: 50px;
      font-weight: 500;
    }
  .splide__pagination__page:hover {
    background-color: #1A293D;
  }
  .splide__pagination__page {
    color: #1A293D;
  }  
  .splide__arrow{
    svg {
      fill: #fff;
    }
    svg:hover {
      fill: #1A293D;
    }
}
`;

// export const StylesProjects = styled.div`
//   display: flex;
//   justify-content: center;
//   padding-top: 30px;
// `

export const StyleProject = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 300;
    img {
      width: 100%;
      height: 600px;
      border-radius: 10px 10px 0 0;
    }
    a {
      text-align: center;
      background-color: #1A293D;
      border-radius: 0 0 10px 10px;
    }
`
