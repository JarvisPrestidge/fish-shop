require('marko/node-require')

import koa from 'koa'
const app = new koa()

const template = require('./index.marko')

app.use(ctx => {
  ctx.body = template.stream({
    name: 'jarvis'
  })
})

app.listen(8080, () => {
  console.log("Running on port 8080...")
})
