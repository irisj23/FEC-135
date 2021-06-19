import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Spinner from '../product-overview/spinner/LoadingSpinner.jsx';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`
const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Button2 = styled.button`
  display:inline-block;
  padding:0.1em .2em;
  border:0.16em solid black;
  margin:0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration:none;
  text-transform:uppercase;
  font-family:'Roboto',sans-serif;
  font-weight:400;
  background-color: black;
  color: white;
  text-align: center;
  transition: all 0.15s;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    border-color: white;
  }
 `

const Modal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.50rem auto;
  border-radius: 4px;
  width: 800px;
  padding: 3rem;
`

const FullImg= styled.img`
width: 700px;
border-radius: 4px;
`

const PhotoModal = ({isShowing, toggle, url}) => isShowing ? ReactDOM.createPortal(
  <Suspense fallback={<Spinner/>}>
  <>
  <Overlay/>
      <Wrapper>
        <Modal>
            <ModalHeader>
              <Button2 type="button" onClick={toggle}>x</Button2>
            </ModalHeader>

          <FullImg src={url}></FullImg>

        </Modal>
  </Wrapper>
  </>
  </Suspense>,
  document.body
) : null;

export default PhotoModal;
