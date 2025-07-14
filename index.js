require('ts-node/register');
require('./src/main');

router.get("/health", (req,res)=>{
  res.sendStatus(20).send({
    success: true
  })
});