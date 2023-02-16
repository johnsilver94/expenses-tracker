import { FC, useContext } from 'react'

import { TransactionsContext } from '../context/transactions.provider'
import { numberWithCommas } from '../utils/format'
import { Transaction as TransactionType } from '../types'

export const Transaction: FC<{ transaction: TransactionType }> = ({ transaction }) => {
	const { deleteTransaction } = useContext(TransactionsContext)
	const sign = transaction.amount < 0 ? '-' : '+'

	return (
		<li className={transaction.amount < 0 ? 'minus' : 'plus'}>
			{transaction.text}{' '}
			<span>
				{sign}${numberWithCommas(Math.abs(transaction.amount).toString())}
			</span>
			<button onClick={() => (deleteTransaction ? deleteTransaction(transaction.id) : null)} className="delete-btn">
				x
			</button>
		</li>
	)
}
