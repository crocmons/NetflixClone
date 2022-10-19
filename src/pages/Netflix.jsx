import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import backgroundImg from "../assets/home.jpg";
import Movielogo from "../assets/homeTitle.webp";
import { FaPlay } from 'react-icons/fa';
import {AiOutlineInfoCircle} from "react-icons/ai"
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { fetchMovies, getGenres } from '../store';
import Slider from '../components/Slider';

const Netflix = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const genresLoaded = useSelector((state)=>
  state.netflix.genresLoaded
  );
  const movies = useSelector((state)=> state.netflix.movies);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getGenres())
  }, []);

  useEffect(() => {
   if(genresLoaded){
    dispatch(fetchMovies({type:"all"}));
   }
  },[genresLoaded]);
  
  
  window.onscroll=()=>{
    setisScrolled(window.pageYOffset === 0 ? false : true);
    return () =>(window.onscroll = null);
  };
// console.log(movies);
  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <div className="hero">
        <img src={backgroundImg} alt="homeImg" className='bg-img'/>
        <div className="container">
          <div className="logo">
            <img src={Movielogo} alt="movies" />
          </div>
          <div className="buttons flex">
            <button className='flex a-center j-center' onClick={()=>navigate("/player")}>
              <FaPlay />
              Play
            </button>
            <button className='flex a-center j-center'>
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        </div>
      </div>
      <Slider movies={movies}/>
    </Container>
  )
}

const Container = styled.div`
background-color:black;
.hero{
  position:relative;
  .bg-img{
    filter:brightness(60%);
  }
  img{
    height:100vh;
    width:100vw;
  }
  .container{
    position:absolute;
    bottom:5rem;
    .logo{
      img{
        width:100%;
        height:100%;
        margin-left:5rem;
      }
    }
    .buttons{
       margin:5rem;
       gap:2rem;
       button{
        font-size:1.4rem;
        gap:1rem;
        border-radius:0.2rem;
        padding:0.5rem;
        padding-left:2rem;
        padding-right:2.4rem;
        border:none;
        cursor:pointer;
        transition:0.2s ease-in-out;
        &:hover{
          opacity:0.8;
        }
        &:nth-of-type(2){
          background-color:rgba(109,109,110,0.7);
          color:white;
          svg{
            font-size:1.8rem;
          }
        }
       }
    }
  }
}
`

export default Netflix