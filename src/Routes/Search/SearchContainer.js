import React from "react";
import SearchPresenter from "./SearchPresenter"

export default class extends React.Component{
    state = {
       movieResults:null,
       tvResult:null,//tv와 movie읠 결과 둘다를 보여줄것임
       searchTerm: "",// 사용자가 단어를 가지고 검색하길 기다릴 것(string)
        error:null,
        loading:false// default로 아무것도 로딩하지 않늘 것이라서
    }

    render(){
        const{movieResults, tvResult, searchTerm, error, loading } = this.state
        return(
            <SearchPresenter
                movieResults={movieResults}
                tvResult={tvResult}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                />
        )
    }
}