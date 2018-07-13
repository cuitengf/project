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
            message: '登陆成功',
            uid: result[0].id
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

    // 获取购物车商品
    .get('/cart', async ctx => {
      var uid = ctx.query.uid

      if (uid) {

        var carts = await ctx
          .orm()
          .sql
          .select()
          .from('users', "u")
          .join('orders', "o", 'o.uid = u.id')
          .query()

        var bid;
        var orders = [];
        for (let i = 0; i < carts.length; i++) {
          orders.push(await ctx
            .orm()
            .sql
            .select()
            .from('books')
            .where(`bid=${carts[i].bid}`)
            .query())
        }
        ctx.body = {
          code: 200,
          carts: carts,
          ods: orders
        }
        return
      }
      ctx.body = {
        code: 400
      }
    })

    // 加入购物车
    .post('/cart/join', async ctx => {
      var bid = ctx.request.body.bid;
      var uid = ctx.request.body.uid

      var ord = await ctx.orm()
        .sql
        .select()
        .from('orders')
        .where(`bid= ${bid}`)
        .query()
      console.log(ord);
      if (ord[0]) {
        var order = await ctx.orm()
          .sql
          .update()
          .table('orders')
          .where(`bid=${bid}`)
          .set('cont', `${ord[0].cont + 1}`)
          .query()

        if (!order) {
          ctx.body = {
            code: 500,
            message: '服务器出错, 后台人员正在维修中....'
          }
          return;
        }
        ctx.body = {
          code: 200,
          message: '加入成功'
        }
        return;
      }

      var result = await ctx.orm()
        .sql
        .insert()
        .into('orders')
        .set('bid', `${bid}`)
        .set('uid', `${uid}`)
        .query()
      if (result) {

        ctx.body = {
          code: 200,
          message: '加入成功',
        }
        return;
      }
      ctx.body = {
        code: 500,
        message: '服务器出错, 后台人员正在维修中....'
      }
    })

    // 删除购物车商品
    .post('/cart/del', async ctx => {
      var uid = ctx.request.body.uid;
      var bid = ctx.request.body.bid;
      console.log(uid, bid);
      if (!uid || !bid) {
        ctx.body = {
          code: 402,
          message: '参数出错, 请重试'
        }
        return
      }
      var ord = await ctx.orm()
        .sql
        .delete()
        .from('orders')
        .where(`uid=${uid}`)
        .where(`bid=${bid}`)
        .query()
      console.log(ord);
      if (!ord[0]) {
        ctx.body = {
          code: 500,
          message: '服务器出错, 后台人员正在维修中....'
        }
        return;
      }
      ctx.body = {
        code: 200,
        message: '删除成功'
      }
    })
}
