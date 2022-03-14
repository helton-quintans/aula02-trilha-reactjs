import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import { Container } from './styles';

interface NewTransactionModalPros {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalPros){
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type='button' 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="Close modal" />
            </button>
            <Container>
                <h2>Register Transaction</h2>
                <input placeholder='Title'/>
                <input type='number' placeholder='Value'/>
                <input placeholder='Category'/>
                <button type="submit">Register</button>

            </Container>
        </Modal>
    )   
}


 