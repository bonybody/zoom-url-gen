'use strict'

module.exports = async function (fastify, opts) {
  fastify.post('/gen', async function (request, reply) {
    const { id, password } = request.body
    const host = "https://us04web.zoom.us/j/"
    const url = `${host}/${id}?pwd${password}`
    // https://us04web.zoom.us/j/76250033249?pwd=kr6pwL9JboR5Q6QwbJJKOjTeT24kuk.1
    return { url }
  })
}
