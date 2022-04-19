import React, { useEffect, useState } from 'react'
import Loader from '../../atoms/loader/loader'
import { ReactComponent as NextIcon } from '../../../assets/icons/angles-right-solid.svg'
import { ReactComponent as PreviousIcon } from '../../../assets/icons/angles-left-solid.svg'
import { ReactComponent as CircleIcon } from '../../../assets/icons/circle-solid.svg'
import './slide.scss'

const Slide = props => {
    const { slideItems } = props

    const [slideIndex, setSlideIndex] = useState(0)

    const incrementIndex = () => {
        if (slideIndex !== slideItems?.length - 1) setSlideIndex(slideIndex + 1)
        else setSlideIndex(0)
    }
    const decrementIndex = () => {
        if (slideIndex > 0) setSlideIndex(slideIndex - 1)
        else if (slideIndex === 0) setSlideIndex(slideItems?.length - 1)
    }
    
    return (
        <>
            {slideItems ? (
                <>
                    <PreviousIcon
                        className="slide-button"
                        onClick={decrementIndex}
                    />
                    <section className="slide-content">
                        <img
                            className="slide-content__image"
                            src={slideItems[slideIndex].image.url}
                            alt={slideItems[slideIndex].title}
                        />
                        <h2 className="slide-content__title">
                            {slideItems[slideIndex].title}
                        </h2>
                        <p className="slide-content__description">
                            {slideItems[slideIndex].description}
                        </p>
                        <div className="slide-content__points-bar">
                            {slideItems.map((_, index) => {
                                const pointClass =
                                    index === slideIndex
                                        ? 'slide-content__point slide-content__point--selected'
                                        : 'slide-content__point'
                                return (
                                    <CircleIcon
                                        className={pointClass}
                                        key={index}
                                        onClick={() => setSlideIndex(index)}
                                    />
                                )
                            })}
                        </div>
                    </section>
                    <NextIcon
                        className="slide-button"
                        onClick={incrementIndex}
                    />
                </>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default Slide
