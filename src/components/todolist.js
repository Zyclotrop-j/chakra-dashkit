import { useState, useCallback } from "react";
import styled from "@emotion/styled";
import {
    Icon,
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
    Divider,
    InputGroup,
    InputRightAddon 
} from '@chakra-ui/react';
import { FiClock } from "react-icons/fi";
import DatePicker from "react-datepicker";
import update from 'immutability-helper';
import "react-datepicker/dist/react-datepicker.css";

import { MCard, CustomDragLayer } from "./mcard";

const SyledInputRightAddon = styled(InputRightAddon)`
    > *, > * > * {
        width: 100%;
        height: 100%;
    }
`;

export const ToDoList = () => {
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
        return (<MCard key={card.id} index={index} id={card.id} kind="todo" moveCard={moveCard}><Checkbox defaultIsChecked={card.ticked}>{card.text}</Checkbox></MCard>);
    };   
    return (<GridItem borderRadius="md" p={2} colSpan={7} bg="white">
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
    </GridItem>)
};

export const Kanban = () => {
    const [startDate, setStartDate] = useState(new Date());
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
        return (<MCard key={card.id} index={index} id={card.id} moveCard={moveCard}>
                <Box p="4" border="solid 1px" borderColor="gray.200" borderRadius="md">
                    <Flex alignItems="center" >
                        <Text>{card.text}</Text>
                        <Spacer />
                        <Text color="gray.300"><Icon as={FiClock} font-size="0.8em" verticalAlign="baseline" mr="2" />Jun 9</Text>
                    </Flex>

                </Box>
            </MCard>);
    };
    return (<GridItem borderRadius="md" p={2} colSpan={7} bg="white">
        <VStack
            spacing={4}
            align="stretch"
            p={3}
        >
            <Flex alignItems="center" pb={2} borderBottom="solid 1px" borderColor="gray.200">
                <Box p={2}><Heading size="sm">Recent Activity</Heading></Box>
                <Spacer />
                <Link href="https://chakra-ui.com" pr="1" color="blue.200">View Kanban</Link>
            </Flex>
            <CustomDragLayer />
            <VStack
                p={2}
                spacing={4}
                align="stretch"
            >
                {cards.map((card, i) => renderCard(card, i))}
            </VStack>
            <Flex alignItems="center" p={2}>
                <InputGroup size="lg">
                    <Input placeholder="Draft your card" />
                    <SyledInputRightAddon position="relative" bgColor="transparent" p="0" m="0" children={<DatePicker
                        popperPlacement="top-end"
                        popperModifiers={{
                            offset: {
                                enabled: true,
                                offset: "0px, 200px" // not too sure why we need this...
                            },
                            preventOverflow: {
                                enabled: true,
                                escapeWithReference: false,
                                boundariesElement: "viewport"
                            }
                        }}
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        customInput={<Button h="full" leftIcon={<FiClock />} variant="ghost" color="gray.300" font-size="0.8em" verticalAlign="baseline">Due date</Button>}
                    />} />
                </InputGroup>
            </Flex>

        </VStack>
    </GridItem>)
};