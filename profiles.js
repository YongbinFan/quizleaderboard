import React from 'react'

export default function Profiles({Leaderboard}) {
    return (

        <div id="profile">
            {
                item(Leaderboard)
            }
        </div>
    )
}


function item(data) {
    return (
        <div>
            {
                data.map((value,index) => (
                    <div className='leaderboard'>
                        <div className='leaderboard_row'>
                            <span>
                                <h3 className='name text-dark'>{value.name}</h3>
                            </span>
                            <span>Score: {value.score}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}