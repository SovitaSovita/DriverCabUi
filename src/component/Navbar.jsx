import { Button } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {

    const location = useLocation()
    let currentPath = location.pathname

    return (
        <div>
            {/* navbar head */}
            <div className='flex justify-between border-b pb-4 px-4 mb-8'>
                <div>
                    <span className='text-gray-500'>Pages</span> {currentPath}
                </div>
                <div className='flex items-center'>
                    {/* btn goto frontEnd */}
                    <Link to={'/'}>
                        <Button variant="outlined">View Site</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
