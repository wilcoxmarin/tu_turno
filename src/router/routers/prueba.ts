const app_router = require('../../config/router')

app_router.get('/', (req: any, res: any) => {
    res.render('page/home')
})

module.exports = app_router;