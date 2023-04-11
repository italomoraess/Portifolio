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
  .splide__pagination__page.is-active {
    background: #1A293D;
  }
  .splide__arrow{
    z-index: 0;
    svg {
      fill: #fff;
    }
    svg:hover {
      fill: #1A293D;
    }
  }

  .splide{
    ul{
      z-index: 0;
    }
  }

  @media (max-width:1024px) {
    .splide{
      width: 75%;
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
      border-radius: 0 0  10px 10px;

      @media (max-width:1024px) {
        height: 100%;
        img {
          object-fit: cover;
        }
      } 
    }
    a {
      text-align: center;
      background-color: #1A293D;
      border-radius: 10px 10px 0 0;
    }
`
