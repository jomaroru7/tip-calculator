import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducer"
const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentajeFormProps = {
    dispatch: Dispatch<OrderActions>
    tip: number
}

export default function TipPercentajeForm({ dispatch, tip }: TipPercentajeFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>
            <form>
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor="">{tipOption.label}</label>
                        <input
                            id={tipOption.id}
                            type="radio"
                            name="tip"
                            value={tipOption.value}
                            onChange={e => dispatch({ type: 'add-tip', payload: { value: +e.target.value } })} // With + we cast the value (string) to number
                            checked={tipOption.value === tip}
                        />
                    </div>
                ))}

            </form>
        </div>
    )
}
