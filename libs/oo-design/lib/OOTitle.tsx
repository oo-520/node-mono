import React, { PropsWithChildren } from 'react'
interface OOTitleProps extends PropsWithChildren {

}
export function OOTitle(props: OOTitleProps) {
    return <h1>{props.children}</h1>
}