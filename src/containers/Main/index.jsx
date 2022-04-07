import React, { memo, useState, useCallback, useEffect } from 'react';
import Api from '../../api';
import { ContainerStyled } from './style';
import Board from './components/Board';
import Panel from './components/Panel';
import Graph from './components/Graph';

function Main(){

    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')
    const updateAt = new Date().toLocaleString()

    const getCovidData = useCallback((country) => {
        Api.getCountry(country)
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    const handleChange = ({ target }) => {
        const country = target.value
        setCountry(country)
    }

    return (
        <ContainerStyled>
            <div className="mb-2">
                <Panel
                    data={data}
                    updateAt={updateAt}
                    onChange={handleChange}
                    country={country}
                    getCovidData={getCovidData}
                />
            </div>
            <div>
                <Board data={data} />
            </div>
            <div>
                <Graph data={data} />
            </div>

        </ContainerStyled>
    )
}

export default memo(Main)