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
                            {columns.map(columnName => (
                                <th>{columnName}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map(item => (
                            <tr>
                                {columns.map(columnName => (
                                    <td>{item[columnName.replace(' ', '')]}</td>
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
