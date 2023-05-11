const list = (req, res)=>{
    const numeros = []
    for(let i = 0; i <=100; i++){
        numeros.push(i)
    }
    res.render('tabuada/list', {numeros})
}
const tabuada = (req, res) =>{
    const tabuada = []
    const num = req.params.num

    for(let i = 0; i<=100; i++){
        tabuada.push({
            num,
            i,
            resultado: num*i,
        })
    }

    res.render('tabuada/tabuada',{
        num: req.params.num,
        tabuada
    })
}
module.exports={list, tabuada}