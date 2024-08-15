import {FormWrapper} from "./FormWrapper.tsx";

export function AddressForm() {
    return (
        <FormWrapper title={"Address"}>
            <label>Street</label>
            <input autoFocus required type="text"/>
            <label>City</label>
            <input required type="text"/>
            <label>State</label>
            <input required min={2} type="text"/>
            <label>Zip</label>
            <input required min={5} type="number"/>
        </FormWrapper>
    )
}