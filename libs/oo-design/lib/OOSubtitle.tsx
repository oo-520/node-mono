import React, { PropsWithChildren } from 'react'
interface OOSubtitleProps extends PropsWithChildren {

}
export function OOSubtitle(props: OOSubtitleProps) {
    return <h2>{props.children}</h2>
}