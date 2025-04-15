import React from 'react';
import { Box, Flex, Heading, Text, Button, Image, Icon, Container } from '@chakra-ui/react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';

export default function UxlmSection() {
    return (
        <Box py={20} bg={'gray.900'}>
            <Container maxW="1300px" h="full">
                <Flex direction="column" align="center" gap={1} mb={20}>
                    <Text
                        fontSize={{ base: 'xl', md: '2xl' }}
                        fontWeight="semibold"
                        textAlign="center"
                        color="white"
                    >
                        We are about to launch our new e-learning platform
                    </Text>

                    <Text
                        textAlign="center"
                        fontWeight="black"
                        fontSize={{ base: 'xl', md: '4xl' }}
                        color="#FCB10A"
                        mb={3}
                        maxW={{ lg: '65%' }}
                    >
                        We need your help to get the word out by posting our content.
                    </Text>

                    <Box textAlign="center" mb={10}>
                        <Text fontSize="2xl" color="white">
                            This &quot;Done For You&quot; system pays you EVERY FRIDAY!
                        </Text>
                    </Box>
                </Flex>
                {/* Section 1 */}
                <Flex
                    w="full"
                    border="2px solid #FCB10A"
                    p={12}
                    direction={{ base: 'column-reverse', md: 'row' }}
                    gap={8}
                    bg="#222222"
                    rounded="md"
                    mb={10}
                    alignItems={'center'}
                >
                    {/* Left Content */}
                    <Box w={{ lg: '50%' }}>
                        <Heading fontWeight="black" color="#FCB10A" fontSize="2xl" mb={3}>
                            We create the videos, graphics, landing pages and all content for you
                        </Heading>

                        <Flex align="start" gap={3} mb={2}>
                            <Icon as={MdKeyboardArrowRight} color="#FCB10A" boxSize={10} />
                            <Text color="gray.300" mt={2} fontSize="md">
                                You post our content on your social media and invite your friends to take a look at our new educational platform.
                            </Text>
                        </Flex>

                        <Flex align="start" gap={3} mb={2}>
                            <Icon as={MdKeyboardArrowRight} color="#FCB10A" boxSize={10} />
                            <Text color="gray.300" mt={2} fontSize="md">
                                We pay you $300 for every new member plus bonuses, gold, silver, cruises, and free luxury vacations.
                            </Text>
                        </Flex>

                        <Flex align="start" gap={3} mb={10}>
                            <Icon as={MdKeyboardArrowRight} color="#FCB10A" boxSize={10} />
                            <Text color="gray.300" mt={2} fontSize="md">
                                We offer support from our community of members just like you who are already earning and seeing success.
                            </Text>
                        </Flex>

                        <Link href="/#form" passHref>
                            <Button
                                as="a"
                                size="lg"
                                variant="outline"
                                color="#FCB10A"
                                borderColor="#FCB10A"
                                borderRadius="none"
                                _hover={{ bg: '#FCB10A', color: '#222222' }}
                            >
                                <Text color="white">Help me get started</Text>
                            </Button>
                        </Link>
                    </Box>

                    {/* Right Image */}
                    <Box w={{ lg: '50%' }}>
                        <Image src="/1.png" w="full" h="full" objectFit="contain" bg="center" alt="Section 1" />
                    </Box>
                </Flex>

                {/* Section 2 */}
                <Flex
                    w="full"
                    border="2px solid #FCB10A"
                    p={12}
                    direction={{ base: 'column', md: 'row' }}
                    gap={8}
                    bg="#222222"
                    rounded="md"
                    alignItems={'center'}
                >
                    {/* Left Image */}
                    <Box w={{ lg: '50%' }}>
                        <Image src="/section-2.jpeg" w="full" h="full" objectFit="contain" bg="center" alt="Section 2" />
                    </Box>

                    {/* Right Content */}
                    <Box w={{ lg: '50%' }}>
                        <Heading fontWeight="black" color="#FCB10A" fontSize="2xl" mb={3}>
                            Our e-learning platform offers courses and Master classes on:
                        </Heading>

                        <Flex align="start" gap={3}>
                            <Icon as={MdKeyboardArrowRight} color="#FCB10A" boxSize={10} />
                            <Text color="gray.300" mt={2} fontSize="md">
                                Everything related to health, wealth and the world of marketing. How to make more, keep more and thrive!
                            </Text>
                        </Flex>

                        <Flex align="start" gap={3}>
                            <Icon as={MdKeyboardArrowRight} color="#FCB10A" boxSize={10} />
                            <Text color="gray.300" mt={2} fontSize="md">
                                Social media marketing, investing, tax strategy, starting a business, AI, ChatGPT and creative personal brand.
                            </Text>
                        </Flex>

                        <Flex align="start" gap={3}>
                            <Icon as={MdKeyboardArrowRight} color="#FCB10A" boxSize={10} />
                            <Text color="gray.300" mt={2} fontSize="md">
                                Hormones and weight management, longevity and anti-aging, plant based nutrition and metabolic health.
                            </Text>
                        </Flex>

                        <Flex align="start" gap={3} mb={10}>
                            <Icon as={MdKeyboardArrowRight} color="#FCB10A" boxSize={10} />
                            <Text color="gray.300" mt={2} fontSize="md">
                                Lead generation, setting goals, wealth strategies, real estate, day trading, cryptocurrency and residual income.
                            </Text>
                        </Flex>

                        <Link href="/#form" passHref>
                            <Button
                                as="a"
                                size="lg"
                                variant="outline"
                                color="#FCB10A"
                                borderColor="#FCB10A"
                                borderRadius="none"
                                _hover={{ bg: '#FCB10A', color: '#222222' }}
                            >
                                <Text color="white">Show me More Courses</Text>
                            </Button>
                        </Link>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}
