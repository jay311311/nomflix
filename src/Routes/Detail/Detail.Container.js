import React from "react";
import DetailPresenter from "./DetailPresenter"
import { moviesApi, TVapi } from "../../api";

export default class extends React.Component{
    constructor(props){
        super(props);//생성자 class이기 떄문에 {pathname}은 존재하지 않는다. 
        const {location:{pathname}} = props;
        this.state = {
            result:null,// id를 가지고 얻게되는 모든것 
            error:null,
            loading: true,
            isMovie : pathname.includes("/movie/") //includes함수는 ()안의 내용이 포함되어있는지 검생해주는것. 값은 false, true
        };
    }
    

async componentDidMount(){
    const {match:{params:{id}},
        history:{push}} = this.props;
    const {isMovie} = this.state;
    const parsedId = parseInt(id);// string인것을 number로 바꾸는 과정
    if (isNaN(parsedId)){
        return push("/");//number가 아니면 home("/")으로 돌아가라 & return 은 리턴후 함수가 종료됨을 의미
    }
    let result=null;
    try{
        if(isMovie){
            ({data:result}= await moviesApi.movieDetail(parsedId));//()은searchContainer 의 "const="와 같은 것"
            //data안에 result가 있는게 아니라 data가 result 이다
        }else{
            ({data:result}= await TVapi.showDetail(parsedId));
            
        }
        console.log(result)
    } catch{
        this.setState({error:"i can't find it"})
    }finally{
        this.setState({loading:false, result})
    }
    
}

    render() {
        //console.log(this.props)//"디폴트 라우터는 모든 route들에게 props를 줄것이다"를 증명한다
        //단, http://localhost:3000/movie/1로 들어가야 console을 볼수 있음.
            
        const {result, error, loading} = this.state;//객체의 비구조 할당
        console.log(result)   
        return(<DetailPresenter 
           result={result}
            error = {error}
            loading = {loading}
        />)
    }
}
 