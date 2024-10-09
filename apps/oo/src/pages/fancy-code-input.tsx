import { OOButton, OOSlider, OOSubtitle, OOTitle } from "oo-design";
import { useState } from "react";

export function FancyCodeInputPage() {
    const [value, setValue] = useState(0)
    return <div>
        <OOTitle>Fancy code input</OOTitle>
        <OOSubtitle>加减1</OOSubtitle>
        <div>
            <div>current:
            <span>{value}</span>
            </div>

        <OOButton onClick={() => setValue(p => p+1)}>inc</OOButton>
        <OOButton onClick={() => setValue(p => p -1)}>dec</OOButton>
        </div>
        <OOSubtitle>Slider</OOSubtitle>
        <OOSlider min={0} max={999999} value={value} onChange={v => setValue(v) }></OOSlider>
        </div>
}