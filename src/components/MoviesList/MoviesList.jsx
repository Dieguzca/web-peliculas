import {Box,Flex,Heading,SimpleGrid} from "@chakra-ui/react"
import {useShowsContext} from '../../context/ShowsContext/context'
import { Movie } from "../Movie/"


const MoviesList = () => {
    
    const {shows} = useShowsContext() 

    return (
        <Flex direction="column" alignItems="center">
            <Heading as="h2" fontSize="50px" mb="40px">
                Peliculas populares
            </Heading>
            <SimpleGrid columns={[1, null, 3]} spacing='20px'>
               <Movie />
               <Movie />
               <Movie />
               <Movie />
               <Movie />
               <Movie />
            </SimpleGrid>
        </Flex>

    )
}

export { MoviesList }