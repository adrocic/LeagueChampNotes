import axios from 'axios'
import '../env.js'

const rotationsInstance = axios.create({
  baseURL: 'https://na1.api.riotgames.com/lol/platform/v3/champion-rotations',
  timeout: 5000,
  headers: { 'X-Riot-Token': `${process.env.API_KEY}` },
})

export default rotationsInstance
