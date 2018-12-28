function get(what, id = null) {

  // To be read from configuration (ENV??)
  const urls = {
    'teams': 'http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/',
    'team': `http://tempo-test.herokuapp.com/7d1d085e-dbee-4483-aa29-ca033ccae1e4/1/team/${id}/`,
  }

  const url = urls[what]
  if (!url) {
    return Promise.reject('Invalid items requested')
  }
  return fetch(url)
    .then(function (response) {
      return response.json()
    })
}

export { get }
