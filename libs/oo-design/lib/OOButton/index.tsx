import { PropsWithChildren } from 'react'
export interface OOButtonProps extends PropsWithChildren {
    onClick: () => void
}
export function OOButton(props: OOButtonProps) {
    return <button
    onClick={props.onClick}
    >{props.children}</button>
}