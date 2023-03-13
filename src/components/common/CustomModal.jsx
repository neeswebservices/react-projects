import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { CodePreview } from "./CodePreview";

export const CustomModal = ({ projectCode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSizeClick = (newSize) => {
    onOpen();
  };

  return (
    <>
      <button
        className="bg-red-600 p-5 text-white font-bold rounded-xl text-lg"
        onClick={() => handleSizeClick()}
        m={4}
      >{`View Source Code`}</button>

      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Source Code for <span className="text-red-600 font-extrabold"> {projectCode?.title}</span> </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {projectCode?.data?.map((code, index) => (
              <CodePreview {...code}  />
            ))}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
