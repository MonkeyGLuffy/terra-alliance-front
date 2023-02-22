
import axios from "axios";
import { useQuery } from "react-query"
import { useLocation } from "react-router-dom";
import TotalNav from "../../component/totalnav";
import TotalRankingBoard from "../../component/totalRanking";
import config from "../../config";


export default function AccountReward() {
    const location = useLocation()
    const address = location.state.address
    console.log(address)
    const { isLoading, isError, data, error } = useQuery("account", async () => {
        const { data } = await axios.get(config.endpoint + `/account/${address}`)
        console.log(data)
        return data
    })
    if (isLoading) {
        return <span>Loading...</span>;
    }
    
    if (isError) {
        return <div>Error:{"Not Account"}</div>
    }
    
    return (
        <>
            <TotalNav isRank={false } />
            <TotalRankingBoard rank={data} isRank={false } />
        </>
    )
}