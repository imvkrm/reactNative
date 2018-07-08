import { FETCHING_MOVIE_DATA, FETCHING_MOVIE_DATA_SUCCESS, FETCHING_MOVIE_DATA_FAILURE} 
from '../../utils/constants'

const initialState = {
    loginData: [],
    isFetchingList: false,
    error: false
}


export default function loginReducer(state = initialState, action) {
   // console.log("MovieDetailReducer >>>>>",action);

    switch (action.type) {  

        case FETCHING_MOVIE_DATA:
            return {
                ...state,
                isFetchingList: true,
                movieData: []
            }
       
        default:
            return state
    }
}