import { Action } from '@ngrx/store'
import { Worksheet } from '../models/Worksheet.model'
import * as WorksheetActions from '../actions/worksheet.action'

const initialState: Worksheet = {
    name: 'Initial Worksheet',
    url: 'http://google.com'
}

// Section 2
export function reducer(state: Worksheet[] = [initialState], action: WorksheetActions.Actions) {
    switch (action.type) {
        case WorksheetActions.ADD_WORKSHEET:
            return [...state, action.payload];
        case WorksheetActions.REMOVE_WORKSHEET:
        state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }

}
