import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewtransactionModal: () => void
}

export function Header({onOpenNewtransactionModal}: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money"/>
                <button type="button" onClick={onOpenNewtransactionModal}>
                    New transaction
                </button>
            </Content>
        </Container>
    )
}