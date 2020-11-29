import React, { useState, useMemo, useCallback } from "react";
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
import { Table1 } from "../../components/activity";
import { TabCard } from "../../components/card";
import { Timeline } from "../../components/timeline";
import { Stat1, Stat2, Stat3, Stat4 } from "../../components/stats";
import { ToDoList, Kanban } from "../../components/todolist";


export default () => {
    const [demo1, setDemo1] = useState(false);
    const [demo2, setDemo2] = useState(false);
    const [demo3, setDemo3] = useState(0);

    return (<Box bg="gray.200" minH="100vh"><Grid
        bg="gray.200"
        templateColumns="repeat(12, 1fr)"
        gap={4}
        p={5}
      >
        <Stat1 />
        <Stat2 />
        <Stat3 />
        <Stat4 />

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

        <TabCard onChange={(index) => setDemo2(index === 0)} tabs={["Red", "Teal"]} colSpan={4}>
            <SamplePie altState={demo2} />
        </TabCard>

        <Table1 demo3={demo3} />

        <TabCard onChange={(index) => setDemo3(index)} tabs={["Red", "Teal", "More"]}><SampleLine2 altState={demo3} /></TabCard>

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

        <Timeline />


        <ToDoList />

        <Kanban />

      </Grid></Box>);
};