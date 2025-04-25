import { FC } from 'react'
import style from "./PercentView.module.css"

type PercentViewType = {
    value: number,
    max: number,
    makeColor: (percent: number) => string
}

const PercentView: FC<PercentViewType> = ({value, max, makeColor}) => {

    return (
        <div className={style.percentview} style={ { color: makeColor(value/max) } }>
            {max}
        </div>
    )
}

export default PercentView

//podle cisla se mena barva -> algoritmus
/*
div inline block (
absolute, width v procentech 
)

*/