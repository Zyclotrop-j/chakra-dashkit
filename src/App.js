import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RLink
} from "react-router-dom";
import {
  ChakraProvider,
  theme,
  extendTheme,

  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  IconButton,
  Link as UILink,
  List,
  ListItem,
  ListIcon,
  useDisclosure
} from '@chakra-ui/react';
import { FiMenu } from "react-icons/fi";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Home from "./pages/index";
import Dashboard from "./pages/dashboards/default";
import {
  Illustration as SignInIllustration,
  Cover as SignInCover,
  Basic as SignInBasic,
} from "./pages/Authentication/Sign-in/index"

const extendedTheme = extendTheme({
  components: { 
    Checkbox: { 
      baseStyle: {
        label: { _checked: { textDecoration: "line-through", color: "gray.400" } }
      }
    }
  }
});

const Link = props => <UILink as={RLink} {...props} />

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <DndProvider backend={HTML5Backend}>
      <ChakraProvider theme={extendedTheme}>
        <Router>
        <IconButton position="absolute" icon={<FiMenu />} ref={btnRef} onClick={onOpen} />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <List>
                  <ListItem>
                    <ListIcon as={FiMenu} />
                    <Link to="/">Home</Link>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FiMenu} /> 
                    <Link to="/dashboard">Dashboard</Link>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FiMenu} />
                    <Link to="/authentication/sign-in/basic">Sign In Basic</Link>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FiMenu} />
                    <Link to="/authentication/sign-in/cover">Sign In with Cover</Link>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FiMenu} />
                    <Link to="/authentication/sign-in/illustration">Sign In with Illustration</Link>
                  </ListItem>
                </List>
              </DrawerBody>
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/authentication/sign-in/basic">
            <SignInBasic />
          </Route>
          <Route path="/authentication/sign-in/cover">
            <SignInCover />
          </Route>
          <Route path="/authentication/sign-in/illustration">
            <SignInIllustration />
          </Route>
        </Switch>
      </Router>
      </ChakraProvider>
    </DndProvider>
  );
}

export default App;
