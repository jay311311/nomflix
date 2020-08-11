import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";
import Section from "Components/Section"

const Contanier = styled.div`
padding : 0px 10px;
`;


const HomePresenter  = ({nowPlaying, upcoming, popular, error, loading}) => loading ? null : (
    <Contanier> 
        {/*{nowPlaying.map()}이 에러가 나오는 이유는 loading 할때 nowPlaying은 존재하지 않아서*/ }
        {nowPlaying && nowPlaying.length > 0  && (
        <Section title="Now Playing">{nowPlaying.map(movie => movie.title)}</Section>)}
        {/*nowPlaying존재하는 지 확인 && nowPlaying길이가 0보다 큰지 확인 && section이 render되는지 확인*/ }
        {upcoming && upcoming.length > 0  && (
        <Section title="upcoming Movies">{upcoming.map(movie => movie.title)}</Section>)}
        {popular && popular.length > 0  && (
        <Section title="Popular Movies">{popular.map(movie => movie.title)}</Section>)}
        
    </Contanier>)
 {/*section안에 children을 넣는 이유는 section에서 div 내부에 원하는 children을 넣을수 있어야 해서 */}
HomePresenter.propTypes = {
    nowPlaying:PropTypes.array,
    upcoming:PropTypes.array,
    popular:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired
}

export default HomePresenter;