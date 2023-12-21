import Modal from "react-bootstrap/Modal";
import Dog from "./Dog/Dog";

interface IProps {
  dog: Dog;
  close: () => void;
}

export default function ({ dog, close }: IProps) {
  return (
    <Modal show={dog !== null} onHide={close}>
      <Modal.Header closeButton />
      <Modal.Body>
        <Dog dog={dog} />
      </Modal.Body>
    </Modal>
  );
}
