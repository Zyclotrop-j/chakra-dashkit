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

export const StatBox = ({
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