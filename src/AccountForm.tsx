import {FormWrapper} from "./FormWrapper.tsx";

type AccountData = {
    email: string
    password: string
}

type AccountFormProps = AccountData & {
    updateFields: (fields: Partial<AccountData>) => void
}
export function AccountForm({ email, password, updateFields }: AccountFormProps) {
    return (
        <FormWrapper title={"Account Creation"}>
            <label>Email</label>
            <input
                autoFocus
                required
                type="email"
                value={email}
                onChange={e => updateFields({ email: e.target.value })}
            />
            <label>Password</label>
            <input
                required
                type="text"
                value={password}
                onChange={e => updateFields({ password: e.target.value })}
            />
        </FormWrapper>
    )
}