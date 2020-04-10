import React, {useContext} from 'react'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
    const { state: {name, recording, locations},
    startRecording, stopRecording, changeName } = useContext(LocationContext) //import des fonctions issues de notre contexte
    const [saveTrack] = useSaveTrack()

    return(<>
        <Spacer>
        <Input value={name} placeholder="Enter name" onChangeText={changeName} />
        </Spacer>

        {recording ? <Button title="Stop" onPress={stopRecording} />
        : <Button title="Start recording" onPress={startRecording} />
        }

        <Spacer />

        {
            !recording && locations.length
            ? (<Button title="Save recording" onPress={saveTrack} />)
            : null
        }
        </>
    )
}

export default TrackForm