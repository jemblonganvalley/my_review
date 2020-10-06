
export default function Navbar (brand='JSNEWS'){
    return `
        <h3 class='brand'>${brand}</h3>
        <div class='menu'>
            <a href='home.html'>home</a>
            <a href='news.html'>news</a>
            <a href='forum.html'>forum</a>
            <a href='user_page.html'>user_page</a>
        </div>
    `
}

