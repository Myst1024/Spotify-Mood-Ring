import { React, useState, useEffect } from 'react';
import { getRecentlyPlayedTracks, getSongAnalysisArray } from '../utils/functions';
import DataList from './DataList'
import Header from './Header'
import AnalysisPage from './AnalysisPage'
import Loading from './Loading'
import CircularProgress from '@material-ui/core/CircularProgress';

const Dashboard = () => {
    const [playedSongsData, setPlayedSongsData] = useState([])

    useEffect(() => {
        const searchRecentlyPlayedSongs = async () => {
            const usersRecentlyPlayed = await getRecentlyPlayedTracks()
            const theSongData = await getSongAnalysisArray(usersRecentlyPlayed)
            setPlayedSongsData(theSongData)
        }
        searchRecentlyPlayedSongs();
    }, [])

    if(playedSongsData.length === 0){
        return (
            <div>
                <Header />
                <CircularProgress color="secondary" />
                <Loading />
            </div>
        )
    }

    return (
        <div>
            <Header />
            <AnalysisPage songs={playedSongsData}/>
            {/* {displaySongs} */}
        </div>
    )
};





    // return (
    //     <div>
    //         <Header />
    //         <DataList songsData={playedSongsData} />
    //     </div>
    // )
// };

export default Dashboard;