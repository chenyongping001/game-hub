import { useInfiniteQuery } from "@tanstack/react-query";
import ms from 'ms'
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");
const useGames = ()=>{
   const gameQuery = useGameQueryStore(s=>s.gameQuery)
   return useInfiniteQuery<FetchResponse<Game>,Error>({
    queryKey:[gameQuery],
    queryFn:({pageParam=1})=>apiClient.getAll({
        params:{
            genres:gameQuery.genreID,
            parent_platforms:gameQuery.platformID,
            ordering:gameQuery.sortOrder,
            search:gameQuery.searchText,
            page:pageParam
        }
    }),
    getNextPageParam:(lastpage,allpages)=>{
        return lastpage.next? allpages.length+1:undefined;
    },
    staleTime: ms('24h'),
})
}

export default useGames;