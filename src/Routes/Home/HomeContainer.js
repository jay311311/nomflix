import React from "react";
import HomePresenter from "./HomePresenter";
import {moviesApi} from "../../api";

export default class extends React.Component{
    state = {
        nowPlaying : null,
        upcoming : null,
        popular  : null,
        error:null,
        loading: true
    };

     async componentDidMount(){// 항상기억할것, 자바스크립트는 나를 절대 기다려 주지 않는다
        try{ //async(기다릴 무언가가 있어), await (기다려 진행하지마. await 끝날떄까지)
            // async, await 를 안하면 object가 아닌 promise(대기) 로 인식
          const {data:{results : nowPlaying}} = await moviesApi.nowPlaying();
          //비구조 할당 이후  setState처럼 nowPlaying으로 rename한 것.(변수명 변경하는 방법)
        //   console.log(nowPlaying)
          const {data:{results:upcoming}} = await moviesApi.upcoming();
        //   console.log(upcoming)
          const {data:{results:popular}} = await moviesApi.popular();
        //   console.log(popular)
         
        this.setState({
            nowPlaying, upcoming, popular
            /*nowPlaying:nowPlaying,
            upcoming:upcoming,
            popular:popular
            위와 같은 내용 */
        })
        } catch{
            this.setState({
                error:"can't get Movie"
            })
        } finally{
            this.setState({
                loading:false
            })
        }
    }//try를 실행하고, 작동하지 않으면 error를 catch를 실행하고, 
    //설사 그게 성공했거나 실패했다 해도 마지막에 뭔가를 해줄것임

    render() {
        const {nowPlaying, upcoming, popular, error, loading} = this.state;//객체의 비구조 할당
        // console.log(this.state)//잘 작동하는 지 확인
        return(<HomePresenter 
            nowPlaying = {nowPlaying} 
            upcoming={upcoming} 
            popular={popular}
            error = {error}
            loading = {loading}
        />)
    }
}
 