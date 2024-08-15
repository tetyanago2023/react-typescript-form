import {FormWrapper} from "./FormWrapper.tsx";

type AddressData = {
    street: string
    city: string
    state: string
    zip: string
}

type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void
}
export function AddressForm({ street, city, state, zip, updateFields }: AddressFormProps) {
    return (
        <FormWrapper title={"Address"}>
            <label>Street</label>
            <input
                autoFocus
                required
                type="text"
                value={street}
                onChange={e => updateFields({ street: e.target.value })}
            />
            <label>City</label>
            <input
                required
                type="text"
                value={city}
                onChange={e => updateFields({ city: e.target.value })}
            />
            <label>State</label>
            <input
                required
                min={2}
                type="text"
                value={state}
                onChange={e => updateFields({ state: e.target.value })}
            />
            <label>Zip</label>
            <input
                required
                min={5}
                type="number"
                value={zip}
                onChange={e => updateFields({ zip: e.target.value })}
            />
        </FormWrapper>
    )
}