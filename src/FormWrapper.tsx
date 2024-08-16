import {ReactNode} from "react";

type FormWrapperProps = {
    title: string
    children: ReactNode
}

export function FormWrapper({ title, children }: FormWrapperProps) {
    return (
        <>
            <h2 className={"title"}>
                {title}
            </h2>
            <div className={"children"}>
                {children}
            </div>
        </>
    )
}
