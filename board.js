import React from 'react'
import Profiles from './profiles'
import {Leaderboard} from './database'

export default function Board() {
  return (
    <div className="leaderboard_container">
        <h1>Leaderboard</h1>
        <Profiles Leaderboard={Leaderboard}></Profiles>

    </div>
    )
}
