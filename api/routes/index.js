var md5 = require('md5');
module.exports = (router) => {
  router.get('/welcome', async function (ctx, next) {
      ctx.state = {
        title: 'koa2 title'
      };

      await ctx.render('welcome', {
        title: ctx.state
      });
    })

    //获取商品
    .get('/books', async ctx => {
      await ctx.orm()
        .sql
        .select()
        .from('books')
        .query().then((result) => {
          ctx.body = {
            code: 200,
            vl: result
          }
        }).catch((err) => {
          if (err) throw err
        });
    })

    // 登录
    .post('/login', async ctx => {
      var username = ctx.request.body.username;
      var password = md5(ctx.request.body.password);
      if (!username && !password) {
        ctx.status = 401;
        ctx.message = '账号密码不能为空';
        return;
      }
      await ctx
        .orm()
        .sql
        .select()
        .from(`users`)
        .where(`username="${username}"`)
        .where(`password="${password}"`)
        .query().then((result) => {
          if (!result[0]) {
            ctx.body = {
              code: 400,
              message: '账号密码错误'
            }

            return;
          }

          ctx.body = {
            code: 200,
            message: '登陆成功'
          }
        }).catch((err) => {
          if (err) {
            ctx.body = {
              code: 500,
              message: new Error(err)
            }
          }
        });
    })

    //注册
    .post('/register', async ctx => {
      var username = ctx.request.body.username;
      var password = md5(ctx.request.body.password);
      if (!username && !password) {
        ctx.status = 401;
        ctx.message = '账号密码不能为空';
        return;
      }
      await ctx
        .orm()
        .sql
        .select()
        .from('users')
        .where(`username="${username}"`)
        .query().then((result) => {
          console.log(result);
          if (result[0]) {
            ctx.body = {
              code: 400,
              message: '已被注册用户名, 请重新输入'
            }
            return;
          }

          ctx.orm()
            .sql
            .insert()
            .into('users')
            .set('username', `${username}`)
            .set('password', `${password}`)
            .query()
          ctx.body = {
            code: 200,
            message: '注册成功。'
          }

          return;
        }).catch((err) => {
          if (err) throw new Error(err)
          return;
        });
    })


}
