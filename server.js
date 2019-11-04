/* 
CORS-->cross origin resources sharing
it allow ajax request to skip same origin policy and access resources from remote hosts
*/
const port=process.env.port || 6365;
const express=require('express');
const cors=require('cors');
const ytdl=require('ytdl-core');
const app = express();

app.use(cors());

app.get('/download',(req,res)=>{
    //console.log(req);
    const URL=req.query.URL;
    
    res.header('content-Disposition', 'attachment; filename="video.mp4"');
    
    ytdl(URL,{
        format:'mp4'
    }).pipe(res);

    res.json({url:URL});
    
});

app.listen(port,()=>console.log(`This server is running on port ${port}`));