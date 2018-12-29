import { get } from '../repository'

describe('repository get function', () => {
  let result = {}

  function givenData(data) {
    result = data
  }

  beforeEach(function () {
    global.fetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve) => {
        resolve({
          json: function () {
            return new Promise((resolve) => {
              resolve(result)
            })
          }
        })
      })
      return p
    })
  })

  it('calls team endpoint for getting teams', () => {
    get('teams')

    expect(global.fetch.mock.calls[0][0]).toEndWith('team/')
  })

  it('calls team endpoint with id for getting team details', () => {
    get('team', 3)

    expect(global.fetch.mock.calls[0][0]).toEndWith('team/3/')
  })

  it('calls user endpoint for getting users', () => {
    get('users')

    expect(global.fetch.mock.calls[0][0]).toEndWith('user/')
  })

  it('calls user endpoint with id for getting user details', () => {
    get('user', 3)

    expect(global.fetch.mock.calls[0][0]).toEndWith('user/3/')
  })

  it('returns a promise that resolves to returned data', () => {
    expect.assertions(1)
    givenData({
      'name': 'Awesome team',
    })

    const promise = get('team', 3)

    promise.then((team) => {
      expect(team.name).toEqual('Awesome team')
    })
  })

  it('returns a rejected promise on invalid items requested', () => {
    expect.assertions(1)
    return get('foobar').catch(e =>
      expect(e).toEqual('Invalid items requested'),
    )
  })
})
