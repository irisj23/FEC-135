import React, { useState, useEffect } from 'react';
import moment from 'moment';
import ReviewPhotoItem from './RPhotoItem'
import styled from 'styled-components';
import { FcCheckmark } from 'react-icons/fc';
import StarsContainer from './StarContainer';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 200;
  font-size: .8em;
  `
const Spacer = styled.div`
  flex: flex-grow 2
  `
const Container = styled.div`
  padding: 3px 5px 3px 5px;
  border-top: 1px solid #e2e2e2;
  margin-bottom: 1em;
  width: 60em;
  `
const SumContainer = styled.div`
  font-weight: bold;
  font-family: Roboto, sans-serif;
  font-size: 1.2em;
  width: 60em;
  `
const BodyContainer = styled.span`
  font-weight: 200;
  `
const RecContainer = styled.span`
  font-weight: 100;
  font-size: .6em;
  margin-right: 1em;
  `
const PhotoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: .5em 0em .5em 0em
  `
const ReportContainer = styled.span`
  font-weight: 100;
  font-size: .6em;
  border-left: 1px solid #e2e2e2;
  padding-left: 1em;
  `



function ReviewListItem ({ body, date, helpfulness, photos, rating, recommend, response, reviewer_id, reviewer_name, summary }) {
  const [expandedReview, setExpandedReview] = useState(false);

  return (
    <>
    <Container>
      <Header>
          <div>
            <StarsContainer rating={rating}/>
          </div>
        <Spacer> <div></div></Spacer>
          <div>
            {`${reviewer_name} - ${moment(date).format('MMMM DD, YYYY')}`}
          </div>
      </Header>
    <div>
      {(recommend) && <RecContainer>I recommend this product <FcCheckmark /></RecContainer>}
    </div>
    <div>
      <SumContainer>
        <h4>{summary}</h4>
      </SumContainer>
        { (expandedReview) ? <BodyContainer>{body}</BodyContainer> :
      <>
      <BodyContainer>
          {body.substring(0, 250)}
      </BodyContainer>
      </>}
      {(body.length > 250 && !expandedReview) && <span onClick={()=> setExpandedReview(true)}>...show more</span>}
    <PhotoContainer>
      {(photos.length > 0) && photos.map((val) => <ReviewPhotoItem key={val.id} url={val.url}/>)}
      <Spacer></Spacer>
    </PhotoContainer>

    </div>
    {(response) && <div><h5>Response from Seller:</h5><span>{response}</span></div>}
    <div>
      <RecContainer>Was this review helpful?</RecContainer>
      <RecContainer>{`Yes (${helpfulness})`}</RecContainer>
      <ReportContainer>{`Report`}</ReportContainer>
    </div>
    </Container>
    </>
  );
}

export default ReviewListItem;

/*
if body.length >250
  body.substring(0,250)
*/


/*
Review Object Properties
val.body = ''
val.date = ''
val.helpfulness= int
val.photos = []
val.rating = int
val.recommend = bool
val.response = ''
val.reviewer_id = int
val.reviewer_name = ''
val.summary = ''
*/
