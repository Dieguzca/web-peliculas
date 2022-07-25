import {Container,Flex} from "@chakra-ui/react"
import { useCallback, useEffect} from "react";
import { MoviesList } from "../components/MoviesList"
import { Welcome } from "../components/Welcome/Welcome"
import { useShowsContext } from "../context/ShowsContext";
import { client } from "../utils/client";


const Home = () => {

    const{setShows} = useShowsContext

    const getMovies = useCallback(async () => {
        const response = await client.get(`/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        if (response.data) {
            const shows = response.data.results;
            setShows(shows)           
        }
    }, [setShows])

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <Flex w="full">
            <Container minW={['full', null, '80vw']}>
                <Welcome />
                <MoviesList />
            </Container>
        </Flex>
    )
}

export default Home;