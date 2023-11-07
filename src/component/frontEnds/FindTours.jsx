import React from 'react'
import { useSelector } from 'react-redux'

function FindTours() {

    const data = useSelector((state) => state.loading.decripInfo)
    
    return (
        <section>
            <div className="py-12 main-find-des bg-root_low">
                <div className="text-center">
                    <div className="text-white text-2xl mb-2 fw-bold font-merienda">Find Your Tours</div>
                    <p className="text-white">{ data?.findTourDesc }</p>
                </div>
            </div>
        </section>
    )
}

export default FindTours