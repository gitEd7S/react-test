import profileReducer, { addNewPost } from './reducer'

it('length of posts should be incremented', () => {
    const action = addNewPost('it-google.com')
    const state = {
        posts: [
            {
                id: 1,
                message: 'Hey, why nobody love me ?',
                countLike: 3,
            },
        ]
    }
    const newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
})
