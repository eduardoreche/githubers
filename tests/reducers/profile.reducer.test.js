import reducer from '../../src/reducers/profile';

describe('profile reducer', ()=> {
  it('should return the initial state', ()=> {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        type: '',
        username: ''
      }
    )
  })

  it('should handle REQUEST_PROFILE', ()=> {
    expect(
      reducer([], {
        type: 'REQUEST_PROFILE', 
        username: 'test'
      })
    ).toEqual(
      {
        type: 'REQUEST_PROFILE',
        username: 'test'
      }
    )
  })

  it('should handle RECEIVE_PROFILE', ()=> {
    expect(
      reducer([], {
        type: 'RECEIVE_PROFILE', 
        username: 'test'
      })
    ).toEqual(
      {
        type: 'RECEIVE_PROFILE',
        username: 'test',
        data: undefined
      }
    )
  })
})