/**
 * Created by davidchains on 4/30/17.
 */

export default (state = null, action) => {
    switch (action.type){
        case 'select_library':
            return action.payload;
        default:
            return state;

    }
    console.log( action );
    return null;
};
