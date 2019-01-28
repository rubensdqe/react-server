import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Index from './src/Home'
import template from './template'

const app = express()

app.use('/dist', express.static('dist'))

app.get('/', (req, res) => {
  const appString = renderToString(<Home />)
  module.hot.accept()

  res.send(template({
    body: appString,
    title: '',
  }))
})

app.listen(3000, () => {
  console.log('Servidor rodando...')
})
