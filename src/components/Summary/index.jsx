import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./style"

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="incomes" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>

            
            <div>
                <header>
                    <p>Outcomes</p>
                    <img src={outcomeImg} alt="Outcomes" />
                </header>
                <strong>-R$ 500,00</strong>
            </div>

            
            <div className='highligth-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
}