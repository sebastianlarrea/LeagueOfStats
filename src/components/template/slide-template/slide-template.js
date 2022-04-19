import React from 'react'

import Header from '../../organisms/header/header'
import Slide from '../../molecules/slide/slide'

import './slide-template.scss'

const SlideTemplate = props => {
    const { slideItems, title } = props

    return (
        <>
            <Header />
            <h1 className="page-title">{title}</h1>
            <div className="slide-container">
                <Slide slideItems={slideItems} />
            </div>
        </>
    )
}

export default SlideTemplate
