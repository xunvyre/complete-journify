import React from 'react';
import {AiFillHome} from 'react-icons/ai';
import {BiBookBookmark, BiPencil, BiCoinStack, BiExit} from 'react-icons/bi';

const Nav = () =>
{
  return (
    <nav>
            <a href="#home"><AiFillHome/></a>
            <a href="#journals"><BiBookBookmark/></a>
            <a href="#upload"><BiPencil/></a>
            <a href="#donate"><BiCoinStack/></a>
            <a href="#logout"><BiExit/></a>
      </nav>
  )
};

export default Nav;