import commentsReducer from 'reducers/comments';

it('handles action of type SAVE_COMMENT', () => {
    const action = {
        type: 'SAVE_COMMENT',
        payload: 'New Comment'
    }

    const newState = commentsReducer([], action)

    expect(newState).toEqual(['New Comment'])
});

it ('handle actions with unknown type', () => {
    expect(commentsReducer([], {})).toEqual([]);
});