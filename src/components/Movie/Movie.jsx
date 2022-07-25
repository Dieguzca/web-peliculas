import { chakra, AspectRatio, Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons';



const Movie = () => { 


  return (
        <Box w="375px" border="1px solid" borderColor="#eee" borderRadius="25px" overflow="hidden">
            <AspectRatio maxW='400px' ratio={1}>
                <Image src="/images/movie.webp" alt="movie" objectFit="cover" />
            </AspectRatio>
            <Flex direction="column" mt="10px" p="15px" h="full">
                <Flex alignItems="center" mt="5px">
                    <StarIcon color="yellow.400" mr="5px" />
                    <Text color="#333" fontFamily="Nunito" fontSize="12px">
                    
                        <chakra.span fontSize="18px" fontWeight="800">
                            7.4
                        </chakra.span>
                        /10
                    </Text>
                </Flex>
                <Heading as="h4" size="md" my="10px" color="blue.500">
                    stranger thinks 
                </Heading>
                <Text textAlign="justify">
                    lorem impusnjkkldnmslakdnksdn
                    kdlkasdjksljdjdkdsksndskndn
                    sdjskdjkdsjsdksdsdjsdjddjds
                    osjdsokdjsdjmskdjksdjsjkjdj
                </Text>

                <Flex w="full">
                    <Button w="full"  colorScheme="blue" mt="10px" >
                        View More
                    </Button>
                </Flex>

            </Flex>
        </Box>
    )
}

export { Movie }