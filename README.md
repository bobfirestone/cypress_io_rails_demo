# demo notes

built with

1. rails 5.2
2. ruby 2.6.0
3. mongodb (if not installed run `brew services start mongodb`)

## cypress rails demo

_1. start rails_
`bin/rails server`

_2. start cypress_
`yarn run cypress:open`

_3. run cypress tests and report to percy_
`yarn run percy exec -- cypress run`
