import { Component } from 'react'
import './Card.css'

interface ICardProps {
    icon: any
    title: string
    description: string
}

export default function Card(props: ICardProps) {
    return (
        <div className='card-container'>
            <div className='card-icon'>
                { props.icon }
            </div>

            <div className='card-text'>
                <h3> {props.title} </h3>
                <p> {props.description} </p>
            </div>
        </div>
    )
}