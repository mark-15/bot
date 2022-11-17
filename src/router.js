import { Router } from 'express'

import { VERSION } from '../environment'
import * as controller from './controllers'
import * as schema from './schema'
import * as validator from './validator'

export const routes =
  Router({ mergeParams: true })
    .get(['/'], (_, __) => __.send(''))
    .get(['/health'], (_, __) => __.json({ message: 'OK', version: VERSION }))
    .options('/*', function (_, res) {
      res.send(200)
    })
    .post(
      '/tweet',
      validator.query.validate(schema.empty),
      validator.param.validate(schema.empty),
      validator.body.validate(schema.empty),
      controller.tweet.post
    )
