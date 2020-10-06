
import Navbar from './Navbar.js'
import Test from './testClass.js'

const App = document.querySelector('.App')
App.innerHTML += `

       <header class="mainHeader slider">
            <nav class="navbar">
                ${Navbar('fadliselaz')}
            </nav>
            <section class="hero"></section>
        </header>

        <section class="beritaList">

        </section>

`
const nm = new Test('fadli', 'depok')

console.log(nm.pr())