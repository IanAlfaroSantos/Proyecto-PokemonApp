import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PokemonApp } from './components/PokemonApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <PokemonApp/>
    </StrictMode>
)