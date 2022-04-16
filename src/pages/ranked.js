import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ACTION from '../store/actions'

import REGIONS from '../constants/js/regions'
import ELO from '../constants/js/elo'

import ranked from '../services/ranked-service'
import TableTemplate from '../components/template/table-template/table-template'

const Ranked = () => {
    const tableColumns = ['summoner Name', 'wins', 'losses', 'league Points']
    const dropdownOptions = [
        {
            title: 'Regions',
            options: REGIONS
        },
        {
            title: 'Elo',
            options: ELO
        }
    ]
    const region = useSelector(state => state.region)
    const elo = useSelector(state => state.elo)
    const dispatch = useDispatch()

    useEffect(() => {
        const getPlayers = () => {

            ranked[elo](region).then(response => {
                const orderByLeaguePoints = response
                    .sort((a, b) => b.leaguePoints - a.leaguePoints)
                    .map(
                        ({
                            summonerId,
                            summonerName,
                            wins,
                            losses,
                            leaguePoints
                        }) => ({
                            summonerId,
                            summonerName,
                            wins,
                            losses,
                            leaguePoints
                        })
                    )
                dispatch({
                    type: ACTION[`ADD_${elo.toUpperCase()}`],
                    payload: orderByLeaguePoints
                })
            })
        }

        getPlayers()
    }, [region, elo, dispatch])

    return (
        <TableTemplate
            title="RANKING"
            tableColumns={tableColumns}
            stateIndex={elo}
            dropdownOptions={dropdownOptions}
        />
    )
}

export default Ranked
