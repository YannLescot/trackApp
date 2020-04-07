import {useState, useEffect} from 'react'
import {Accuracy, requestPermissionsAsync, watchPositionAsync} from 'expo-location'

export default useLocation = (callback) => {
    const [err, setErr] = useState(null)

    const startWatching = async () => {
        try {
            const {granted} = await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10,
            }, 
            callback
            )
            if (granted) {
                // Do my stuff here...
            } else {
                throw new Error('Location permission not granted');
            }
        } catch (err) {
             setErr(err);
        }
    }

    useEffect(() => {
        startWatching()
    }, [])

    return [err]
}