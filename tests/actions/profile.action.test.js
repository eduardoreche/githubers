import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import expect from 'expect';
import { fetchProfile } from '../../src/actions/profile';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Profile actions', ()=> {

  afterEach(() => {
    nock.cleanAll();
  })

  it('should fetch a github profile', ()=> {
    var username = 'test';
    
    nock('https://api.github.com/')
      .get(`/users/${username}`)
      .reply(200, { profile: 'profile.data' } )

    const expectedActions = [
      { type: 'REQUEST_PROFILE', username }, 
      { type: 'RECEIVE_PROFILE', username, data: { profile: 'profile.data' } }
    ]

    const store = mockStore({ profiles: [] });

    return store.dispatch(fetchProfile(username))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })

  })

})