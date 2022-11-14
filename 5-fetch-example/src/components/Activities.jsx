import React, { useState } from 'react'

const Activities = () => {
  const [activity, setActivity] = useState([])
  const [loading, setLoading] = useState(false)

  const loadActivities = () => {
    setLoading(true)
    fetch('https://www.boredapi.com/api/activity')
      .then((res) => res.json())
      .then((data) => {
        setActivity([...activity, data])
        setLoading(false)
      })
  }

  return (
    <div>
      <h2> Activities </h2>
      <ul>
        {activity.map((act) => {
          return <li key={act.key}>{act.activity}</li>
        })}
      </ul>

      <button disabled={loading} onClick={() => loadActivities()}>
        load another
      </button>
    </div>
  )
}

export default Activities

// todo list:
// - load another btn
// - loading status
// - multiple activities using list (ul/li)
// - fix loading logic
