import { useState, useContext, FormEvent } from 'react'

import { TransactionsContext } from '../context/transactions.provider'
import { CreateTransaction } from '../types'

export const AddTransaction = () => {
	const [text, setText] = useState<string>('')
	const [amount, setAmount] = useState<string>('0')

	const { addTransaction } = useContext(TransactionsContext)

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const newTransaction: CreateTransaction = {
			text,
			amount: parseInt(amount)
		}

		addTransaction ? addTransaction(newTransaction) : null
	}
	return (
		<>
			<h3>Add new transaction</h3>
			<form onSubmit={onSubmit}>
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						Abount <br /> (negative - expense, positive- income)
					</label>
					<input
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder="Enter amount..."></input>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</>
	)
}
