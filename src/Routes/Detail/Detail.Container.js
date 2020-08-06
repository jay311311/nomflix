import React from "react";
import DetailPresenter from "./DetailPresenter"

export default class extends React.Component{
    state = {
        result:null,// id를 가지고 얻게되는 모든것 
        error:null,
        loading: true
    };

    render() {
        const {result, error, loading} = this.state;//객체의 비구조 할당
        return(<DetailPresenter 
           result={result}
            error = {error}
            loading = {loading}
        />)
    }
}
 