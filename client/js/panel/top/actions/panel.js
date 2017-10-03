/**
 * Created by ermak on 01.02.17.
 */
import * as C from "../constants"

export const showPanel = (isOpen, isLoad) => ({
    type: C.SHOW_PANEL,
    isOpen,
    isLoad
});

export const togglePanel = (data) => {
    return {
        type: C.TOGGLE_PANEL,
        data
    }
}
