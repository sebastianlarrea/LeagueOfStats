import React from 'react'

import ACTION from '../../../store/actions'

import {useDispatch} from 'react-redux'

import './dropdown.scss'

const Dropdown = props => {
    const { options, dropdownTitle } = props
    
    const dispatch = useDispatch()

    const setEloRegion = (payload) => {
        
        let type
        switch (dropdownTitle){
            case 'Regions':
                type = ACTION.SET_REGION
                dispatch({type: ACTION.RESET_RANKED})
                dispatch({ type, payload})
                break
            case 'Elo':
                type = ACTION.SET_ELO
                dispatch({ type, payload})
                break
            default:
                type = null
                break
        }
    }

    return <div className="dropdown-container">
            <label className="dropdown-container__label">{dropdownTitle}:</label>
            <select className="dropdown-container__select" onChange={(e) => setEloRegion(e.target.value)}>
                {options.map(option => (
                    <option className="dropdown-container__option" value={option.code}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
}

export default Dropdown
