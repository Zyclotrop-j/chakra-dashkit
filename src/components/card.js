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
import { AbsBox } from "./absbox";

export const TabCard = ({ children, tabs, onChange, colSpan }) => (<GridItem borderRadius="md" p={2} colSpan={colSpan || 8} bg="white">
<VStack 
    spacing={4}
    align="stretch"
    p={3}
    h="100%"
>
    <Tabs onChange={onChange} borderBottom="solid 1px" borderColor="gray.200">
        <Flex alignItems="center">
            <Box p={2}><Heading size="sm">Traffic Channels</Heading></Box>
            <Spacer />
            <TabList borderBottom="none">
                {tabs.map(tabChildren => (<Tab pb="calc(0.5rem + 0.5rem)">{/* calc(0.5rem + 0.5rem) = default padding + pb={2} from flex*/}
                    {tabChildren}
                </Tab>))}
            </TabList>
        </Flex>
    </Tabs>
    <AbsBox>
        {children}
    </AbsBox>
</VStack>
</GridItem>);