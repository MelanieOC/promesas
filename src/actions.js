import store from './store';     
// llamar funcion search en app.js

//luisa
async function toJson(param) {
    return fetch(param)
    .then(res => res.json())
    .then (res => {
        return {
            name : res.pl_name,
            dens : res.pl_dens,
            telescope : res.pl_telescope,
            img : res.img,
            year : res.pl_disc
        };
    })
}

export async function search() {
    const res = await fetch("data/earth-like-results.json").then(result => result.json());
    const list = await getPlanets(res.results);
    store.setState({
        items : list
    })
}

function getPlanets(list) {
  return Promise.all(list.map(planet => toJson(planet)))
}

//soli
export async function search(){
    const url = ["planets/Kepler-22b.json","planets/Kepler-62f.json","planets/Kepler-186f.json"];
    url.map((item,index)=>{
        fetch(item)
        .then(response => response.json())
        .then(res => {
            let newItems = [...store.getState().items];
            newItems.push(res);
            store.setState({
                items:newItems,
            })
        })
    })
}

//gabi
export async function search() 
{
    const url = "data/earth-like-results.json";
    // fetch(url)
    //   .then(response => response.json())
    //   .then(result =>  store.setState({
    //       query: result.results
    //   }))
    const response = await fetch (url);
    const result = await response.json();
    // store.setState({
    //     query: result.results
    // })
    searchItem(result.results);
    // const planeta2 = searchItem(result.results[1]);    
    // console.log ('planeta1,', planeta1);
    // console.log ('planeta2,', planeta2);    
}

export async function searchItem(result) 
{
    //await search();
    const urls = result;
    // const urls = await [...store.getState().query];
    // return new Promise( (response, reject) => {
    //     fetch(url).then ( res => response ( res.json () ))
    //  })
    let newItems = [...store.getState().items];
    
    for(let i in urls)
    {
        fetch(urls[i])
            .then(response => response.json())
            .then(result =>  {
                console.log("result", result);
                // store.setState({
                //     items: newItems.push(result)
                // })
                newItems.push(result);
                console.log("newItems", newItems);                
        })
    }
    store.setState({
        items: newItems
    })
}
