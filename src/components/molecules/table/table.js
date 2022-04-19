import React from 'react'
import Loader from '../../atoms/loader/loader'
import { useSelector } from 'react-redux'
import './table.scss'

const Table = props => {
    const { columns, stateIndex } = props
    const tableData = useSelector(state => state[stateIndex])

    return (
        <section className="container">
            {tableData ? 

                <table className="container__table">
                    <thead>
                        <tr>
                            {columns.map((columnName, index) => (
                                <th key={index}>{columnName}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item, index) => (
                            <tr key={index}>
                                {columns.map((columnName, index) => (
                                    <td key={index}>{item[columnName.replace(' ', '')]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>

                : <Loader />
            }
        </section>
    )
}

export default Table
