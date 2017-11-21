import store from './store';

export async function getPlanets() {
    const planets = await fetch("planets/earth-like-results.json").then(res => res.json())
    planets.results.map(planet=>{
        fetch(planet)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            let newItems = [...store.getState().planets];
            newItems.push(res);
            store.setState({
                planets: newItems,
            })
        })
    })
    
}
