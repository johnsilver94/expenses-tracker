export type Transaction = {
	id: string
	text: string
	amount: number
	createdAt: Date
}

export type CreateTransaction = Omit<Transaction, 'id' | 'createdAt'>

export type ActionMap<M extends { [index: string]: any }> = {
	[Key in keyof M]: M[Key] extends undefined
		? {
				type: Key
		  }
		: {
				type: Key
				payload: M[Key]
		  }
}

export type Reducer<S, A> = (prevState: S, action: A) => S
