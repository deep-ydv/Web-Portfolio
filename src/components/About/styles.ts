import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 2.4rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    text-align:justify;
  }
  .cppIcon{

    img{
      width: 4rem;
    }
    
  }

 
  

  .about-image{
    /* text-align: center; */
    /* border: 1px solid white; */
    display: none;
    justify-content:center;
    /* align-items:center; */
    /* height:400px; */
    
   img{
    
    /* border: 1px solid white; */
     /* margin-top: 2rem; */
     /* width: 90%; */
     /* height: 100%; */
     /* border-radius:50%; */
     /* background-color:orange; */
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }
  @media screen and (min-width: 1060px) {
  .about-image {
    display: flex;
    /* img{
      width: 100%;
    } */
  }
}

  @media only screen and (max-width: 480px) {
    /* .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    } */
  }

  @media (max-width: 1060px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    /* .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    } */
    
    
  }

`