import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useModals from './useModals';
import PhotoModal from './PhotoModal';

//onclick create modal window w full size img
const Thumbnail = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 80px;
  height: 80px;
  margin-right: 1em;
  object-fit: cover;
  &:hover {
    border-radius: 6px;
    border-color: black;
    cursor: pointer;
  }
`



function reviewPhotoItem({ url }) {
  const {isShowing, toggle} = useModals();

  return (
    <>
    <Thumbnail src={url} onClick={toggle}></Thumbnail>
    <PhotoModal isShowing={isShowing} toggle={toggle} url={url} />
    </>
  );
}

export default reviewPhotoItem;
