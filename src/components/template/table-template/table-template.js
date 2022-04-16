import React from 'react'

import Header from '../../organisms/header/header'
import Table from '../../molecules/table/table'
import Dropdown from '../../atoms/dropdown/dropdown'

import './table-template.scss'

const TableTemplate = props => {
    const { title, tableColumns, stateIndex, dropdownOptions } = props

    return (
        <>
            <Header />
            <h1 className="page-title">{title}</h1>
            {dropdownOptions && (
                <section className="dropdowns-container">
                    {dropdownOptions.map(dropdown => <Dropdown dropdownTitle={dropdown.title} options={dropdown.options} />)}
                </section>
            )}
            <Table columns={tableColumns} stateIndex={stateIndex} />
        </>
    )
}

export default TableTemplate
