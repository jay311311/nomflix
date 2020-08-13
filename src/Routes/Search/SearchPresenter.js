import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";
import Loader from "../../Components/Loader"
import Section from "../../Components/Section"
const Container = styled.div`
    padding:0 20px;
    
`;
const Form = styled.form`
    margin-bottom :50px;
    width:100%;
    `;

const Input = styled.input`
    all:unset;
    font-size:28px;
    width:100%;
`;

const SearchPresenter  = ({movieResults, tvResult, searchTerm, error, loading, handleSubmit, updateTerm}) => 
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TV Show" value={searchTerm} onChange={updateTerm}>
                {/*input을 제어 하기위해 value추가*/}
            </Input>
        </Form>
        {loading ? (<Loader/>) :(<>
            {movieResults && movieResults.length>0 && (
                <Section title="Movie Results">
                    {movieResults.map( 
                        movie=> (<span key={movie.id}>{movie.title}</span>
                    ))}
                </Section>
            )}
            {tvResult && tvResult.length>0 && (
                <Section title="TV SHOW Results">
                    {tvResult.map( 
                        show=> (<span key={show.id}>{show.name}</span>
                    ))}
                </Section>
            )}
        </> 
        )}
    </Container>

SearchPresenter.propTypes ={
    movieResults:PropTypes.array,
    tvResult:PropTypes.array,
    searchTerm:PropTypes.string,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
    handleSubmit:PropTypes.func.isRequired,
    updateTerm:PropTypes.func.isRequired
}

export default SearchPresenter;