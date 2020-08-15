import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
const Contanier = styled.div`
padding : 0px 20px;
`;


const HomePresenter  = ({nowPlaying, upcoming, popular, error, loading}) => loading ? (<Loader></Loader>) : (
    <Contanier> 
        {/*{nowPlaying.map()}이 에러가 나오는 이유는 loading 할때 nowPlaying은 존재하지 않아서*/ }
        {nowPlaying && nowPlaying.length > 0  && (
        <Section title="Now Playing">
            {nowPlaying.map(movie => (
                <Poster/>
                ))}
        </Section>)}
        {/*nowPlaying존재하는 지 확인 && nowPlaying길이가 0보다 큰지 확인 && section이 render되는지 확인*/ }
        {upcoming && upcoming.length > 0  && (
        <Section title="upcoming Movies">
            {upcoming.map(movie => (
                <Poster/>
            ))}
        </Section>)}
        {popular && popular.length > 0  && (
        <Section title="Popular Movies">
            {popular.map(movie => (
                <Poster/>
            ))}
        </Section>)}
        {/*section안에 children을 넣는 이유는 section에서 div 내부에 원하는 children을 넣을수 있어야 해서 */}
        {error && <Message color="#e74c3c" text={error}/>}
    </Contanier>)
 
HomePresenter.propTypes = {
    nowPlaying:PropTypes.array,
    upcoming:PropTypes.array,
    popular:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired
}

export default HomePresenter;