# Props and State Management

There is a concept of props and state for our components. Heres a quick glance of the difference between them:
<ul>
    <li>Props: component configuration when rendering</li>
    <li>State: Keep track of component data over time</li>
</ul>

Essentially, state will become props at some point; its like the components own data storage. We will pass state data as prop data. We will also see a concept called ```hooks``` which is a type of function that lets you "hook onto" react features. For example ```useState``` is a popular react hook.

```jsx
const Cat = (props: CatProps) => {
    const [isHungry, setIsHungry] = useState(true)
    return {<Logic here for setter function>}
}
```

<details>
<summary>Code example for state use</summary>

~~~jsx
import React, { useState } from 'react'
import SongDetails from './SongDetails'

const MusicPlayer = () => {

    const [currentSong, setCurrentSong] = useState({
        title: 'Cumberland Blues',
        artist: 'Grateful Dead',
        isPlaying: false,
    })

    const togglePlayPause = () => {
        setCurrentSong((prevSong) => ({
            ...prevSong,
            isPlaying: !prevSong.isPlaying,
        }))
    }

    
    return (
        <div>
            <h1>Music Player</h1>
            <button onClick={togglePlayPause}>
                {currentSong.isPlaying ? 'Pause' : 'Play'}
            </button>
            <SongDetails song={currentSong}/>
        </div>
    )
}

export default MusicPlayer
~~~


Child wComponent for Music Player
~~~jsx
import React from 'react'

const SongDetails = ({ song }) => {
    return (
        <div>
            <h2>Now Playing</h2>
            <p>Title: {song.title}</p>
            <p>Artist: {song.artist}</p>
            <p> {song.isPlaying ? 'Playing' : 'Paused'}</p>
        </div>
    )
}

export default SongDetails
~~~
</details>

