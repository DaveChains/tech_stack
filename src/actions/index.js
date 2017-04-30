/**
 * Created by davidchains on 4/30/17.
 */
export const selectLibrary = (libraryId) => {

    return {
        type: 'select_library',
        payload: libraryId
    };
};