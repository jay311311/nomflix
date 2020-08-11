import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components";

const SearchPresenter  = ({movieResults, tvResult, searchTerm, error, loading, handleSubmit}) => null;

SearchPresenter.propTypes ={
    movieResults:PropTypes.array,
    tvResult:PropTypes.array,
    searchTerm:PropTypes.string,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
    handleSubmit:PropTypes.func.isRequired
}

export default SearchPresenter;