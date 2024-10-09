import { useState } from "react"

export interface OOSliderProps {
    min: number
    max: number
    value: number
    onChange: <T>(next: number, transformed?: T) => void
    transformer?: <T>(real: number) => T
}
export function OOSlider(props: OOSliderProps) {
    const [value, setValue] = useState(Number(props.value))
    function handleChange(next: number | string) {
        let result = Number(next)
        props.onChange(result, props.transformer?.(result))
        setValue(result)
    }
    return <div>

    <input type='range' min={props.min} max={props.max} onChange={e => handleChange(e.target.value)} />
    <label>{props.transformer?.(value) ?? value}</label>
    </div>
}