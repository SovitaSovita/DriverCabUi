import React from 'react'
import { useParams } from 'react-router-dom';

function DetinationDetail() {

    const { id } = useParams();

    // Use the `id` parameter in your component logic

  return (
    <div>
        Hello destination destail {id}
    </div>
  )
}

export default DetinationDetail