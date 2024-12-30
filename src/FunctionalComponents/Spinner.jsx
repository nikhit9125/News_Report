import React from 'react'

export default function Spinner() {
    return (
        <div className='container my-5 text-center'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
