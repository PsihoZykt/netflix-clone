import axios from "axios"
import {useEffect, useState} from "react";

const TMBD = () => {

    const API_KEY = "c9752603766fbcc50e54e4b1afd641e5"
    const API_URL = "https://api.themoviedb.org/3"
    const requests = {

        fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,

        fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

        fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,

        fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,

        fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

        fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

        fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

        fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

    }
    const instance = axios.create({
        baseURL: API_URL
    })
    let [rows, setRows] = useState([])
    // let test = [1,2,3]
    useEffect(() => {
        instance.get(requests.fetchTrending).then(r => setRows(r.data.results))
    }, [])
    console.log(rows)
    // @ts-ignore
    return (
        // @ts-ignore
        <div> {rows.map(row => <div> {row.overview? row.overview: null}</div>)} </div>
     )

}

export default TMBD
