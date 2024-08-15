import {FormWrapper} from "./FormWrapper.tsx";

export function AccountForm() {
    return (
        <FormWrapper title={"Account Creation"}>
            <label>Email</label>
            <input autoFocus required type="email" />
            <label>Password</label>
            <input required type="text" />
        </FormWrapper>
    )
}