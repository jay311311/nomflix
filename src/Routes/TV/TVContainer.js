import React from "react";
import TVPresenter from "./TVPresenter"
import {TVapi} from "../../api"
export default class extends React.Component{
    state = {
        topRated :null,
        popular :null,
        airingToday :null,
        error:null,
        loading:true
    }

    async componentDidMount(){
        try{
            const {data:{results:topRated}} = await TVapi.topRated()
            const {data:{results:popular}} = await TVapi.popular()
            const {data:{results:airingToday}} = await TVapi.airingToday()
            this.setState({
                topRated, popular, airingToday
            })
        } catch{
            this.setState({
                error:"can't find movies"
            })
        } finally{
            this.setState({
                loading:false
            })
        }
       
    }
    render(){
        const{topRated, popular, airingToday, error, loading  } = this.state
        console.log(this.state)
        return(<TVPresenter
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                error={error}
                loading={loading}
                />
        )
    }
}