import { COMMENTS } from '../shared/comments';
import * as ActionTYpes from './ActionTypes';

export const Comments= (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTYpes.ADD_COMMENT:
            const comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
}