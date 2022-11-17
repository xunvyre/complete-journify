import React from 'react';
import {BiArrowBack} from 'react-icons/bi';
import './backbutton.css';

const BackButton = () =>
{
  return(
    <nav class="back-btn">
      <a href='/'><BiArrowBack/></a>
    </nav>
  )
};

export default BackButton;