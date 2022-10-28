import { Router } from 'express'
<<<<<<< HEAD
import { getPokemons } from './useCases/getPokemons'
=======
import { buildPokemons } from './infrastructure/buildPokemons'
import { makeGetPokemons } from './useCases/getPokemons'
>>>>>>> 1792ff998b386a1fab0261ff86379c70c9c5dd01

const TrainerRouter = Router()

TrainerRouter.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  res.send({ id, name: 'Ash Ketchup' })
})

TrainerRouter.get('/:id/pokemon', (req, res) => {
  const id = parseInt(req.params.id)

<<<<<<< HEAD
=======
  const getPokemons = makeGetPokemons(buildPokemons)
>>>>>>> 1792ff998b386a1fab0261ff86379c70c9c5dd01
  getPokemons(id).then((pokemons) => res.send(pokemons))
})

export default TrainerRouter
