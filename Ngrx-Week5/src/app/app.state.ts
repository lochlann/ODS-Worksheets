import {Worksheet} from './models/worksheet.model'

export interface AppState {
    readonly worksheet: Worksheet[];
}