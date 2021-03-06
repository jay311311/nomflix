import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

const Container = styled.div`

`;

const Image = styled.div`

background-image: url(${props=>props.bgUrl});
height:180px;
background-size:cover;
border-radius:4px;
background-position:center center;
transition:opacity 0.1s linear;
`;

const Rating = styled.span`
position:absolute;
bottom:5px;
right:5px;
font-size:12px;
opacity:0;
transition:opacity 0.1s linear;
`;
const ImageContainer  = styled.div`
position: relative;
margin-bottom:5px;
&:hover{
    ${Image}{
        opacity:0.3;
    }
    ${Rating}{
        opacity:1;
    }
};
`;
const Title = styled.span`
display:block;
font-size:12px;
margin-bottom:3px;
`;
const Year = styled.span`
font-size:10px;
color:rgba(225,225,225,.5);

`;

const Poster =({id, imageUrl, title, rating, year, isMovie = false})=>(
<Link to ={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
        <ImageContainer>
            <Image bgUrl={ imageUrl ? `https://image.tmdb.org/t/p/w300/${imageUrl}` : require("../errorImage/noposter.jpg")}></Image>
            <Rating>
                <span role="img" aria-label="rating">
                    ⭐
                </span>{" "}
                {rating}/10
            </Rating>
        </ImageContainer>
        <Title>{title.length > 15? `${ title.substring(0,15)}...` : title}</Title>
        <Year>{year}</Year>
    </Container>
</Link>
) 




Poster.propTypes = {
    id : PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
    year: PropTypes.string,
    isMovie: PropTypes.bool
}

export default Poster;