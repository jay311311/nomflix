import React from "react";
import SearchPresenter from "./SearchPresenter";
import {moviesApi,TVapi} from "../../api";

export default class extends React.Component{
    state = {
       movieResults:null,
       tvResult:null,//tv와 movie읠 결과 둘다를 보여줄것임
       searchTerm: "",// 사용자가 단어를 가지고 검색하길 기다릴 것(string)
        error:null,
        loading:false// default로 아무것도 로딩하지 않늘 것이라서
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const {searchTerm} = this.state;
        if(searchTerm !== " "){
            this.searchByTerm()
        }
    }
    updateTerm = (event) =>{
        const {target:{value}} = event;
        console.log(value)
        this.setState({
            searchTerm : value
        })
    }
     searchByTerm = async() => {
        const {searchTerm} = this.state;
        this.setState({loading:true})
        try{
            const {data:{results:movieResults}} = await moviesApi.search(searchTerm);
            const {data:{results:tvResult}} = await TVapi.search(searchTerm);
            this.setState({
                movieResults,tvResult
            })
            
        } catch{
            this.setState({
                error:"ican't find imformation"
            })
        } finally{
            this.setState({
                loading:false
            })
        }
    }

    render(){
        const{movieResults, tvResult, searchTerm, error, loading } = this.state
        console.log(this.state)
        return(
            <SearchPresenter
                movieResults={movieResults}
                tvResult={tvResult}
                searchTerm={searchTerm}
                error={error}
                loading={loading}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
                />
        )
    }
}