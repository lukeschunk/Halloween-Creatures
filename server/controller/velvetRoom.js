let creatures = [
    {
      name: "Halloween Cat",
      image_url: "https://www.animalsheltering.org/sites/default/files/images/magazine/black-cat-pumpkins-bays-blog-m146689.jpg",
      scary: {
        level: 1
      }
    },
    {
      name: "Ghost",
      image_url: "http://konknet.com/-/wp-content/uploads/2017/08/a-ghost-story-thymb.jpg",
      scary: {
        level: 7
      }
    }
  ]

  module.exports={

    readNecronomicon:(req,res)=>{
        res.status(200).send(creatures);
    },
createMonster: (req,res)=>{
   creatures.push(req.body)
    res.status(200).send(creatures)
},

deleteMonster:(req,res)=>{
    const{id}=req.params
    var index = creatures.findIndex(s=>s.id=== +id)
  
    if(index !== -1){
      creatures.splice(index,1)
    }
    res.status(200).send(creatures)
  }
  }