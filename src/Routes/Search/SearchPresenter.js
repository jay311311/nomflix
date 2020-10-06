import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "../../Components/Loader"
import Section from "../../Components/Section"
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

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
        <Helmet>
            <title>search in Nomflix</title>
        </Helmet>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TV Show" value={searchTerm} onChange={updateTerm}>
                {/*input을 제어 하기위해 value추가*/}
            </Input>
        </Form>
        {loading ? (<Loader/>) :(<>
            {movieResults && movieResults.length>0 && (
                <Section title="Movie Results">
                    {movieResults.map( movie=>
                       ( <Poster 
                        key={movie.id} 
                        id={movie.id}       
                        title={movie.original_title} 
                        imageUrl={movie.poster_path}
                        rating={movie.vote_average}
                        year={/* movie.release_date && */ movie.release_date.substring(0,4)}
                        //substring은 release_data가 존재할때만 사용하도록 한다는 의미로 && 삽입
                        isMovie={true}
                    />)
                    )}
                </Section>
            )}
            {tvResult && tvResult.length>0 && (
                <Section title="TV SHOW Results">
                    {tvResult.map( 
                        show=>     
                        (<Poster 
                            key={show.id} 
                            id={show.id}       
                            title={show.original_name} 
                            imageUrl={show.poster_path}
                            rating={show.vote_average}
                            year={/* movie.release_date && */ show.first_air_date.substring(0,4)}
                            //substring은 release_data가 존재할때만 사용하도록 한다는 의미로 && 삽입
                        />
                    ))}
                </Section>
            )}
        </> 
        )}
          {error && <Message color="#e74c3c" text={error}/>}
          {tvResult && tvResult.length === 0 &&
          (<Message  text = {"nothing Found"} color="#95a5a6" />) }
          
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