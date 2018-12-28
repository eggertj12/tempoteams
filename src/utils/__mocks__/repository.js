const repo = jest.genMockFromModule('fs');

const resolves = new Promise((resolve) => {
  resolve([])
})
const rejects = new Promise((resolve, reject) => {
  reject()
})

let promise = resolves

repo.get = () => {
  return promise
}

repo.__setResult = data => {
  promise = new Promise((resolve) => {
    resolve(data)
  })
}

repo.__shouldSucceed = () => {
  promise = resolves
}

repo.__shouldFail = () => {
  promise = rejects
}

module.exports = repo;
