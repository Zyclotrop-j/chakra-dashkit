import React, { useState, useMemo, useCallback } from "react";
import update from 'immutability-helper';
import { useDrag, useDrop } from 'react-dnd';
import _ from "lodash";
import Measure from 'react-measure'
import {
    Flex,
    Box,
    Spacer,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Grid,
    GridItem,
    Tag,
    Wrap,
    WrapItem,
    Text,
    Square,
    VStack,
    StackDivider,
    Heading,
    Switch,
    FormControl,
    FormLabel,
    Tabs,
    TabList,
    Tab,
    Image,
    Link,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    VisuallyHidden,
    IconButton,
    Avatar,
    AvatarBadge,
    Checkbox,
    Input,
    Divider
} from '@chakra-ui/react';
import { FiDollarSign, FiBriefcase, FiClock, FiMoreVertical, FiMoreHorizontal } from 'react-icons/fi';
import { SampleLine, SampleBar, SamplePie, SampleLine2 } from "../../components/charts";
import { SampleTable, SampleMenu } from "../../components/tables";
import { Card } from "../../components/card";

const timelineLine = {
    _before: {
        content: '""',
        position: "absolute",
        top: "1rem",
        left: "1.5rem",
        height: "100%",
        borderLeft: "1px solid #e3ebf6",
    }
};

const StatBox = ({
    label,
    number,
    helper,
    icon
}) => {
    return (<Flex>
        <Flex p="4" alignItems="center">
            <Stat>
                <StatLabel>{label}</StatLabel>
                <StatNumber>{number}</StatNumber>
                {helper && <StatHelpText>{helper}</StatHelpText>}
            </Stat>
        </Flex>
        <Spacer />
        <Flex p="4" alignItems="center">
            {icon}
        </Flex>
    </Flex>);
}
export default () => {
    const [demo1, setDemo1] = useState(false);
    const [demo2, setDemo2] = useState(false);
    const [demo3, setDemo3] = useState(0);
    const [measurement, _updateMeasurement] = useState({});
    const updateMeasurement = useMemo(() => _.debounce(_updateMeasurement, 150), [_updateMeasurement]);
    
    const [cards, setCards] = useState([
        {
            id: 1,
            text: 'Delete old mess in function files',
        },
        {
            id: 2,
            text: 'Refactor the social sharing modules',
        },
        {
            id: 3,
            text: 'Create the release notes for the new pages so customers get psyched',
        },
        {
            id: 4,
            text: 'Send Dianna those meeting notes',
        },
        {
            id: 5,
            text: 'Share the documentation for the new unifed API',
        },
        {
            id: 6,
            text: 'Clean up the Figma file with all of the avatars, buttons, and other components',
            ticked: true
        },
    ]);
    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex];
        setCards(update(cards, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
            ],
        }));
    }, [cards]);
    const renderCard = (card, index) => {
        return (<Card key={card.id} index={index} id={card.id} text={card.text} ticked={card.ticked} moveCard={moveCard}/>);
    };      

    return (<Box bg="gray.200" minH="100vh"><Grid
        bg="gray.200"
        templateColumns="repeat(12, 1fr)"
        gap={4}
        p={5}
      >
        <GridItem borderRadius="md" p={2} colSpan={12/4} bg="white">
            <StatBox label={
                <Text fontSize="sm" color="black">Value</Text>
            } number ={<Wrap align="baseline">
                <WrapItem>$24,500</WrapItem>
                <WrapItem><Tag variant="solid" colorScheme="green" size="sm">+3.5%</Tag></WrapItem>
            </Wrap>}  icon={<Text fontSize="2xl" color="gray.400">
                <FiDollarSign />
            </Text>} />
        </GridItem>
        <GridItem borderRadius="md" p={2} colSpan={12/4} bg="white" >
            <StatBox label={
                <Text fontSize="sm" color="black">Total Hours</Text>
            } number ={<Wrap align="baseline">
                <WrapItem>763.5</WrapItem>
                <WrapItem></WrapItem>
            </Wrap>}  icon={<Text fontSize="2xl" color="gray.400">
                <FiBriefcase />
            </Text>} />
        </GridItem>
        <GridItem borderRadius="md" p={2} colSpan={12/4} bg="white" >  
            <StatBox label={
                <Text fontSize="sm" color="black">Exit %</Text>
            } number ={<Wrap align="baseline">
                <WrapItem>35.5%</WrapItem>
                <WrapItem></WrapItem>
            </Wrap>}  icon={<Text w="75px" h="35px" p="0" m="0" fontSize="2xl" color="gray.400">
                <SampleLine />
            </Text>} />
        </GridItem>
        <GridItem borderRadius="md" p={2} colSpan={12/4} bg="white" >
            <StatBox label={
                <Text fontSize="sm" color="black">Avg. Time</Text>
            } number ={<Wrap align="baseline">
                <WrapItem>2:37</WrapItem>
                <WrapItem></WrapItem>
            </Wrap>}  icon={<Text fontSize="2xl" color="gray.400">
                <FiClock />
            </Text>} />
        </GridItem>

        <GridItem borderRadius="md" p={2} colSpan={8} bg="white" >
            <VStack 
                spacing={4}
                align="stretch"
                p={3}
            >
                <Flex alignItems="center" borderBottom="solid 1px" borderColor="gray.200" pb={2}>
                    <Box p={2}><Heading size="sm">Chakra App</Heading></Box>
                    <Spacer />
                    <Box p="1">
                        <FormControl display="flex" alignItems="center">
                            <FormLabel color="gray.300" htmlFor="email-alerts" mb="0">
                            Last year comparision:
                            </FormLabel>
                            <Switch id="email-alerts" onChange={() => setDemo1(!demo1)} />
                        </FormControl>
                    </Box>
                </Flex>
                <Box h="300px">
                    <SampleBar altState={demo1} />
                </Box>
            </VStack>

        </GridItem>

        <GridItem borderRadius="md" p={2} colSpan={4} bg="white">
            <VStack 
                spacing={4}
                align="stretch"
                p={3}
            >
                <Tabs onChange={(index) => setDemo2(index === 0)} borderBottom="solid 1px" borderColor="gray.200">
                    <Flex alignItems="center">
                        <Box p={2}><Heading size="sm">Traffic Channels</Heading></Box>
                        <Spacer />
                        <TabList borderBottom="none">
                            <Tab pb="calc(0.5rem + 0.5rem)">Red</Tab>{/* calc(0.5rem + 0.5rem) = default padding + pb={2} from flex*/}
                            <Tab pb="calc(0.5rem + 0.5rem)">Teal</Tab>
                        </TabList>
                    </Flex>
                </Tabs>
                <Box h="300px">
                    <SamplePie altState={demo2} />
                </Box>
            </VStack>

        </GridItem>

        <GridItem borderRadius="md" p={2} colSpan={4} bg="white">
            <VStack 
                spacing={4}
                align="stretch"
                p={3}
            >
                <Flex alignItems="center" pb={2} borderBottom="solid 1px" borderColor="gray.200">
                    <Box p={2}><Heading size="sm">Projects</Heading></Box>
                    <Spacer />
                    <Link href="https://chakra-ui.com" pr="1" color="blue.200">View All</Link>
                </Flex>
                <VStack
                    divider={<StackDivider borderColor="gray.200" />}
                    spacing={4}
                    align="stretch"
                >
                    <Grid px={2} templateColumns="auto 1fr auto" gap={6} alignItems="center">
                        <Box>
                            <Link href="https://chakra-ui.com" w="4rem">
                                <Image
                                    borderRadius="md"
                                    objectFit="fit"
                                    w="4rem"
                                    src="https://source.unsplash.com/random/800x600"
                                    alt="Dan Abramov"
                                />
                            </Link>
                        </Box>
                        <Box>
                            <Heading fontSize="md" lineHeight="1"><Link href="#">Homepage Redesign</Link></Heading>
                            <Text fontSize="xs" color="gray.500">Updated 4hr ago</Text>
                        </Box>
                        <Box>
                            <SampleMenu />
                        </Box>
                    </Grid>
                    <Grid px={2} templateColumns="auto 1fr auto" gap={6} alignItems="center">
                        <Box>
                            <Link href="https://chakra-ui.com" w="4rem">
                                <Image
                                    borderRadius="md"
                                    objectFit="fit"
                                    w="4rem"
                                    src="https://source.unsplash.com/random/800x600"
                                    alt="Dan Abramov"
                                />
                            </Link>
                        </Box>
                        <Box>
                            <Heading fontSize="md" lineHeight="1"><Link href="#">Travels & Time</Link></Heading>
                            <Text fontSize="xs" color="gray.500">Updated 4hr ago</Text>
                        </Box>
                        <Box>
                            <SampleMenu />
                        </Box>
                    </Grid>
                    <Grid px={2} templateColumns="auto 1fr auto" gap={6} alignItems="center">
                        <Box>
                            <Link href="https://chakra-ui.com" w="4rem">
                                <Image
                                    borderRadius="md"
                                    objectFit="fit"
                                    w="4rem"
                                    src="https://source.unsplash.com/random/800x600"
                                    alt="Dan Abramov"
                                />
                            </Link>
                        </Box>
                        <Box>
                        <Heading fontSize="md" lineHeight="1"><Link href="#">Safari Exploration</Link></Heading>
                            <Text fontSize="xs" color="gray.500">Updated 4hr ago</Text>
                        </Box>
                        <Box>
                            <SampleMenu />
                        </Box>
                    </Grid>
                    {demo3 === 2 ? [
                        (<Grid px={2} templateColumns="auto 1fr auto" gap={6} alignItems="center">
                            <Box>
                                <Link href="https://chakra-ui.com" w="4rem">
                                    <Image
                                        borderRadius="md"
                                        objectFit="fit"
                                        w="4rem"
                                        src="https://source.unsplash.com/random/800x600"
                                        alt="Dan Abramov"
                                    />
                                </Link>
                            </Box>
                            <Box>
                            <Heading fontSize="md" lineHeight="1"><Link href="#">Safari Exploration</Link></Heading>
                                <Text fontSize="xs" color="gray.500">Updated 4hr ago</Text>
                            </Box>
                            <Box>
                                <SampleMenu />
                            </Box>
                        </Grid>),
                        (<Grid px={2} templateColumns="auto 1fr auto" gap={6} alignItems="center">
                            <Box>
                                <Link href="https://chakra-ui.com" w="4rem">
                                    <Image
                                        borderRadius="md"
                                        objectFit="fit"
                                        w="4rem"
                                        src="https://source.unsplash.com/random/800x600"
                                        alt="Dan Abramov"
                                    />
                                </Link>
                            </Box>
                            <Box>
                            <Heading fontSize="md" lineHeight="1"><Link href="#">Safari Exploration</Link></Heading>
                                <Text fontSize="xs" color="gray.500">Updated 4hr ago</Text>
                            </Box>
                            <Box>
                                <SampleMenu />
                            </Box>
                        </Grid>),
                        (<Grid px={2} templateColumns="auto 1fr auto" gap={6} alignItems="center">
                            <Box>
                                <Link href="https://chakra-ui.com" w="4rem">
                                    <Image
                                        borderRadius="md"
                                        objectFit="fit"
                                        w="4rem"
                                        src="https://source.unsplash.com/random/800x600"
                                        alt="Dan Abramov"
                                    />
                                </Link>
                            </Box>
                            <Box>
                            <Heading fontSize="md" lineHeight="1"><Link href="#">Safari Exploration</Link></Heading>
                                <Text fontSize="xs" color="gray.500">Updated 4hr ago</Text>
                            </Box>
                            <Box>
                                <SampleMenu />
                            </Box>
                        </Grid>),
                    ] : []}
                </VStack>
            </VStack>
        </GridItem>

        <GridItem borderRadius="md" p={2} colSpan={8} bg="white">
            <VStack 
                spacing={4}
                align="stretch"
                p={3}
                h="100%"
            >
                <Tabs onChange={(index) => setDemo3(index)} borderBottom="solid 1px" borderColor="gray.200">
                    <Flex alignItems="center">
                        <Box p={2}><Heading size="sm">Traffic Channels</Heading></Box>
                        <Spacer />
                        <TabList borderBottom="none">
                            <Tab pb="calc(0.5rem + 0.5rem)">Red</Tab>{/* calc(0.5rem + 0.5rem) = default padding + pb={2} from flex*/}
                            <Tab pb="calc(0.5rem + 0.5rem)">Teal</Tab>
                            <Tab pb="calc(0.5rem + 0.5rem)">More</Tab>
                        </TabList>
                    </Flex>
                </Tabs>
                <Box position="relative">
                    <Box position="absolute" top="0" left="0" w={measurement?.width} h={measurement?.height}>
                        <SampleLine2 altState={demo3} />
                    </Box>
                </Box>
                <Measure
                    bounds
                    onResize={contentRect => {updateMeasurement(contentRect.bounds)}}
                >
                    {({ measureRef }) => (
                    <Box h="100%" position="relative" ref={measureRef} minH="300px">
                        
                    </Box>
                    )}
                </Measure>
            </VStack>
        </GridItem>

        <GridItem borderRadius="md" p={2} colSpan={12} bg="white">
            <VStack 
                spacing={4}
                align="stretch"
                p={3}
            >
                <Flex alignItems="center" pb={2} borderBottom="solid 1px" borderColor="gray.200">
                    <Box p={2}><Heading size="sm">Projects</Heading></Box>
                    <Spacer />
                    <Button colorScheme="blue" size="sm">Export</Button>
                </Flex>
                <Box>
                    <SampleTable />
                </Box>
            </VStack>

        </GridItem>

        <GridItem borderRadius="md" p={2} colSpan={5} bg="white">
            <VStack 
                spacing={4}
                align="stretch"
                p={3}
            >
                <Flex alignItems="center" pb={2} borderBottom="solid 1px" borderColor="gray.200">
                    <Box p={2}><Heading size="sm">Recent Activity</Heading></Box>
                    <Spacer />
                    <Link href="https://chakra-ui.com" pr="1" color="blue.200">View All</Link>
                </Flex>
                <VStack
                    spacing={4}
                    align="stretch"
                >
                    <Grid px={2} templateColumns="auto 1fr auto" gap={6} position="relative" alignItems="top" sx={timelineLine}>
                        <Avatar size="sm" name="Kent Dodds" src="https://bit.ly/kent-c-dodds">
                            <AvatarBadge boxSize="1.25em" bg="green.500" />
                        </Avatar>
                        <Box>
                            <VStack
                                spacing={1}
                                align="stretch"
                            >
                                <Heading fontSize="md" lineHeight="1"><Link href="#">Dianna Smiley</Link></Heading>
                                <Text fontSize="xs" color="gray.500">Uploaded the files "Launchday Logo" and "New Design".</Text>
                                <Text fontSize="xs" color="gray.500">2m ago</Text>
                            </VStack>
                        </Box>
                    </Grid>
                    <Grid px={2} templateColumns="auto 1fr auto" gap={6} position="relative" alignItems="top" sx={timelineLine}>
                        <Avatar size="sm"  name="Segun Adebayo" src="https://bit.ly/sage-adebayo">
                            <AvatarBadge boxSize="1.25em" bg="green.500" />
                        </Avatar>
                        <Box>
                        <VStack
                                spacing={1}
                                align="stretch"
                            >
                                <Heading fontSize="md" lineHeight="1"><Link href="#">Ab Hadley</Link></Heading>
                                <Text fontSize="xs" color="gray.500">Shared the "Why Dashkit?" post with 124 subscribers.</Text>
                                <Text fontSize="xs" color="gray.500">1h ago</Text>
                            </VStack>
                        </Box>
                    </Grid>
                    <Grid px={2} templateColumns="auto 1fr auto" gap={6} position="relative" alignItems="top">
                        <Avatar size="sm"  name="Ryan Florence" src="https://bit.ly/ryan-florence">
                            <AvatarBadge boxSize="1.25em" bg="green.500" />
                        </Avatar>
                        <Box>
                            <VStack
                                spacing={1}
                                align="stretch"
                            >
                                <Heading fontSize="md" lineHeight="1"><Link href="#">Adolfo Hess</Link></Heading>
                                <Text fontSize="xs" color="gray.500">Exported sales data from Launchday's subscriber data.</Text>
                                <Text fontSize="xs" color="gray.500">3h ago</Text>
                            </VStack>
                        </Box>
                    </Grid>
                </VStack>

            </VStack>
        </GridItem>


        <GridItem borderRadius="md" p={2} colSpan={7} bg="white">
            <VStack 
                spacing={4}
                align="stretch"
                p={3}
            >
                <Flex alignItems="center" pb={2} borderBottom="solid 1px" borderColor="gray.200">
                    <Box p={2}><Heading size="sm">Recent Activity</Heading></Box>
                    <Spacer />
                    <Tag size="sm">23 Archived</Tag>
                </Flex>
                <VStack
                    p={2}
                    spacing={4}
                    align="stretch"
                >
                    {cards.map((card, i) => renderCard(card, i))}
                </VStack>
                <Divider />
                <Flex alignItems="center" p={2}>
                    <Input variant="unstyled" placeholder="Create a task" />
                    <Spacer />
                    <Button colorScheme="blue" size="sm">Add</Button>
                </Flex>

            </VStack>
        </GridItem>



      </Grid></Box>);
};