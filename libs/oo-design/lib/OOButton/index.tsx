import React, { ReactNode } from 'react'
export interface OOButtonProps {
    children: ReactNode
}
export function OOButton(props: OOButtonProps) {
    return <button>{props.children}</button>
}