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
import { SampleLine } from "./charts";

import { StatBox } from "./statbox";

export const Stat1 = () => (<GridItem borderRadius="md" p={2} colSpan={12/4} bg="white">
<StatBox label={
    <Text fontSize="sm" color="black">Value</Text>
} number ={<Wrap align="baseline">
    <WrapItem>$24,500</WrapItem>
    <WrapItem><Tag variant="solid" colorScheme="green" size="sm">+3.5%</Tag></WrapItem>
</Wrap>}  icon={<Text fontSize="2xl" color="gray.400">
    <FiDollarSign />
</Text>} />
</GridItem>);

export const Stat2 = () => (<GridItem borderRadius="md" p={2} colSpan={12/4} bg="white" >

<StatBox label={
    <Text fontSize="sm" color="black">Total Hours</Text>
} number ={<Wrap align="baseline">
    <WrapItem>763.5</WrapItem>
    <WrapItem></WrapItem>
</Wrap>}  icon={<Text fontSize="2xl" color="gray.400">
    <FiBriefcase />
</Text>} />
</GridItem>);


export const Stat3 = () => (<GridItem borderRadius="md" p={2} colSpan={12/4} bg="white" >  
<StatBox label={
    <Text fontSize="sm" color="black">Exit %</Text>
} number ={<Wrap align="baseline">
    <WrapItem>35.5%</WrapItem>
    <WrapItem></WrapItem>
</Wrap>}  icon={<Text w="75px" h="35px" p="0" m="0" fontSize="2xl" color="gray.400">
    <SampleLine />
</Text>} />
</GridItem>);

export const Stat4 = () => (<GridItem borderRadius="md" p={2} colSpan={12/4} bg="white" >
<StatBox label={
    <Text fontSize="sm" color="black">Avg. Time</Text>
} number ={<Wrap align="baseline">
    <WrapItem>2:37</WrapItem>
    <WrapItem></WrapItem>
</Wrap>}  icon={<Text fontSize="2xl" color="gray.400">
    <FiClock />
</Text>} />
</GridItem>);