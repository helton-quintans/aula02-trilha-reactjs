import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal'
import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalPros {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalPros){
    const { createTransaction } = useContext(TransactionsContext)

    const [title, setTitle] = useState('')
    const [amount, setAmout] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        createTransaction({
            title,
            amount,
            type,
            category
        })
    }

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
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Register Transaction</h2>
                <input 
                    placeholder='Title'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input 
                    type='number' 
                    placeholder='Value'
                    value={amount}
                    onChange={event => setAmout(Number(event.target.value))}
                />
                <TransactionTypeContainer>
                    <RadioBox 
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={ type==='deposit' }
                        activeColor="green"
                    >
                            <img src={incomeImg} alt="Income" />
                            <span>Income</span>
                    </RadioBox>

                    <RadioBox 
                        type="button"
                        onClick={() => { setType('withdraw') }}
                        isActive={ type==='withdraw' }
                        activeColor="red"
                    >
                            <img src={outcomeImg} alt="Outcome" />
                            <span>Outcome</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input 
                    placeholder='Category'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">Register</button>

            </Container>
        </Modal>
    )   
}


 