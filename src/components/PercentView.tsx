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
            <p>{value / max * 100}%</p>
            <div className={style.bar}>
                <div style={ {height: "100%", backgroundColor: makeColor(value/max), color: makeColor(value/max), width: `${value / max * 100}%` }}> 
                
                </div>
            </div>
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