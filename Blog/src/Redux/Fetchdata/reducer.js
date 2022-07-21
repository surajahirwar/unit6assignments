import { GETPOSTS_ERROR, GETPOSTS_LOADING, GETPOSTS_SUCCESS, ADDPOST } from "./type";




var inital = {
    getdata:{
        loading:false,
        error:false
    },
    data:[]
}


export const dataReducer = (state=inital, {type, payload}) => {

    switch(type){
        case ADDPOST:{
            return { ...state,data:payload}
        }
        case GETPOSTS_LOADING:{
            return { ...state, getdata:{
                ...state.getdata,
                loading:true,
                error:false,
            }
        }}
        case GETPOSTS_SUCCESS:{
            return { ...state, getdata:{
                ...state.getdata,
                loading:false,
                error:false,
            },
            data:payload,
        }}
        case GETPOSTS_ERROR:{
            return { ...state, getdata:{
                    ...state.getdata,
                    loading:false,
                    error:true,
            }}
        }    
    default:{
        return state;
    }    
    }
}