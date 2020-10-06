import axios from "axios";

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params: {
        api_key : "af2f08436b7bbb2d0cb756e068dffde8",
        language : "en-US"
    }
});
//AXIOS는 인스턴스를 위한 설정이 가능하다

api.get("tv/popular");//테스트용
//여기서 /tv/popular을 하게되면 baseURL를 덮어쓰기 하게됨, / 은 절대 경로를 의미.

export  const moviesApi = {
    nowPlaying : () => api.get("movie/now_playing"),
    upcoming : () => api.get("movie/upcoming"),
    popular : () => api.get("movie/popular"),
    movieDetail : (id) => api.get(`movie/${id}`,{
        params:{
            append_to_response : `videos`
        }
    }),
    search:(term)=> api.get("search/movie",{
        params:{
            query : encodeURIComponent(term) // query는 uri인코딩이 되어져야 한다
        }
    })
}// 오브젝트
export  const TVapi = {
    topRated: () => api.get("tv/top_rated"),
    popular:()=> api.get("tv/popular"),
    airingToday:()=> api.get("tv/airing_today"),
    showDetail : (id) => api.get(`tv/${id}`,{
        params:{
            append_to_response : `videos`
        }
    }),
    search:(term)=> api.get("search/tv",{
        params:{
            query : encodeURIComponent(term) // query는 uri인코딩이 되어져야 한다
        }
    })
}