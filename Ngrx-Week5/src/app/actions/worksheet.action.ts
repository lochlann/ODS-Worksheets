import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Worksheet } from '../models/worksheet.model'

export const ADD_WORKSHEET       = '[WORKSHEET] Add'
export const REMOVE_WORKSHEET    = '[WORKSHEET] Remove'

export class AddWorksheet implements Action{
    readonly type = ADD_WORKSHEET

    constructor(public payload: Worksheet){}

}

export class RemoveWorksheet implements Action{
    readonly type = REMOVE_WORKSHEET

    constructor(public payload: number){}

}

export type Actions = AddWorksheet | RemoveWorksheet