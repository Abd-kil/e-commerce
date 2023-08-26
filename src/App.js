import { useRef } from 'react';
import './App.css';
import { AlertDialog, AlertDialogBody,  AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Card, Heading, ScaleFade, Text, useDisclosure} from '@chakra-ui/react';

function App() {
  const {isOpen , onOpen, onClose} = useDisclosure()
  const cancelRef = useRef()
  
  return (
    <div className="App">
      <Card h='200px' w='200px' bg='pink.100' m='30px' >
        <Heading as='h4' fontSize='3xl'>Thinkpad T470s</Heading>
        <Text>price: 900.00 $</Text>
        <Button m='30px 10px 0' bg='pink.700' color='white' onClick={onOpen}>Add to cart</Button>
      </Card>
      <ScaleFade>
      <AlertDialog
      motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
          <AlertDialogHeader>sucsess</AlertDialogHeader>
          <AlertDialogBody>
            The product was add to the cart
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} colorScheme='red' onClick={onClose}>
              OK
            </Button>
          </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      </ScaleFade>
    </div>
  );
}

export default App;
