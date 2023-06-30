import Action from 'components/shared/Action'
import Container from 'components/shared/Container'
import PageControlsTab from 'components/shared/PageControlsTab'
import Title from 'components/shared/Title'
import React, { useState } from 'react'
import TesterComponent from './components/TesterComponent'

export default function ApiTestser() {
    const [currentPage, setCurrentPage] = useState('axios')
    return (
        <Container>
            <PageControlsTab className="bg-white p-5 rounded-md shadow-default">
                <Title className="text-indigo-700" title="API REQUESTS TESTER" subTitle="Having configured your apis, try testing them to ensure they are running" />
                <div className="flex items-center justify-between">
                    <Action onClick={() => setCurrentPage('axios')} title="Axios API" />
                    <Action onClick={() => setCurrentPage('fetch')} title="Fetch API" />
                </div>
            </PageControlsTab>
            {currentPage === 'axios' && <TesterComponent />}
            {currentPage === 'fetch' && <TesterComponent />}

        </Container>
    )
}
