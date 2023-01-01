import React from 'react'
import './CardSection.css'

interface ICardSectionProps {
    image: any
    title: string
    description: string
    direction?: string
}

export default function CardSection(props: ICardSectionProps) {
    const style: React.CSSProperties | any = {
        flexDirection: props.direction
    }

    return (
        <div style={style} className='cardSection-container'>
            <div className='cardSection-image'>
                <img width={650} src={props.image} alt="" />
            </div>

            <div className='cardSection-text'>
                <h2> {props.title} </h2>
                <p> {props.description} </p>
            </div>
        </div>
    )
}