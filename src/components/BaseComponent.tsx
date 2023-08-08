// import React from 'react'
import BaseLayout from '../layouts/BaseLayout'
import { Outlet } from 'react-router-dom'

// type Props = {
//     children: React.ReactNode
// }

function BaseComponent() {
    return (
        <BaseLayout>
            <Outlet />
        </BaseLayout>
    )
}

export default BaseComponent