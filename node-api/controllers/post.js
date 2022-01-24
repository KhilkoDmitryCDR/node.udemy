exports.getPosts=(req,res)=>{
    res.json({
        posts:[
            {
                title:"FirstPost"
            },
            {
                title:"SecondPost"
            }
        ]
    });
}

