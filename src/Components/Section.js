import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
:not(:last-child){
margin-bottom: 50px};
`;

const Title = styled.span`
    font-size:16px;
    font-weight:600;
    
`;

const Grid = styled.div`
margin-bottom: 25px;
display:grid;
grid-template-columns : repeat(auto-fill, 125px);
grid-gap: 25px;
`;

//children은 react prop(예약된 react prop)이다.
//children은 movie에서 movie처럼 태그 사이의 값을 받는다
const Section = ({title, children}) =>(
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>
);

Section.propTypes = {
    title:PropTypes.string.isRequired,
    children:PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Section;