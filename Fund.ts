import { isoly } from "isoly"
import { isly } from "isly"

export interface Fund {
	reference: string
	currency: isoly.Currency
	amount: number
}
export namespace Fund {
	export const type = isly.object<Fund>({
		reference: isly.string(),
		currency: isly.fromIs("isoly.Currency", isoly.Currency.is),
		amount: isly.number(),
	})
}
