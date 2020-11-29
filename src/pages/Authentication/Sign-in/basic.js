import { useState, useCallback } from 'react';
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
  FormHelperText,
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
  Container,
  Center,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { FiEye, FiEyeOff } from "react-icons/fi";

export const Basic = () => {
  const [show, setShow] = useState(false);
  const handleClick = useCallback(() => setShow(!show));

  return (<Container>
    <VStack>
      <Box p="5" w="full">
        <Center pb="5">
          <Heading>
            Sign-In
          </Heading>
        </Center>
        <Center>
          <Text color="gray.300">
            Free access to our dashboard.
          </Text>
        </Center>
      </Box>
      <VStack p="5" spacing={6} as="form" w="full">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="name@address.com" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              placeholder="Enter your password"
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement>
              <IconButton icon={show ? <FiEyeOff /> : <FiEye />} variant="ghost" h="full" w="full" onClick={handleClick} />
            </InputRightElement>
          </InputGroup>
          
        </FormControl>
        <Button w="full" colorScheme="blue" variant="solid">Sign in</Button>
        <Text color="gray.300" fontSize="sm">Don't have an account yet? <Link color="blue.300">Sign up</Link></Text>
      </VStack>
    </VStack>
  </Container>)
};

/*
<div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-5 col-xl-4 my-5">
          <h1 class="display-4 text-center mb-3">
            Sign in
          </h1>
          <p class="text-muted text-center mb-5">
            Free access to our dashboard.
          </p>
          <form>
            <div class="form-group">
                <label>Email Address</label>
                <input type="email" class="form-control" placeholder="name@address.com">
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col">
                        <label>Password</label>

                    </div>
                <div class="col-auto">
                    
                    
                    <a href="password-reset.html" class="form-text small text-muted">
                    Forgot password?
                    </a>

                </div>
            </div> 
            <div class="input-group input-group-merge">
                <input type="password" class="form-control form-control-appended" placeholder="Enter your password">
                <div class="input-group-append">
                    <span class="input-group-text">
                    <i class="fe fe-eye"></i>
                    </span>
                </div>
                </div>
            </div>
            <button class="btn btn-lg btn-block btn-primary mb-3">
                Sign in
            </button>
            <div class="text-center">
                <small class="text-muted text-center">
                Don't have an account yet? <a href="sign-up.html">Sign up</a>.
                </small>
            </div>
          </form>
        </div>
      </div> 
    </div>
    */