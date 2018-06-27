
# presets
主要是转码规则，目前主要就是`babel-preset-env`和`babel-preset-stage-x`(http://babeljs.io/docs/en/babel-preset-stage-2)

# babel-polyfill 和 transform-runtime

1,`babel-polyfill`直接注入es6以上的全局包并且重写，缺点就是体积比较大并且可能覆盖别的补丁，比较省事，`babel-preset-env`提供了一个useBuiltIns的选项，可以按需加载.

2,`transform-runtime`会自动识别新代码自动添加polyfill，缺点就是不支持添加原型链上的方法，不会污染全局对象

一般选择一个即可(目前我一般选择第一个)


```
//最简单的env，报错，不支持>   const c = {...a}
./node_modules/.bin/babel babelrc/index.js --presets=env --no-babelrc

```

```
//新增stage-2，支持transform-object-rest-spread
./node_modules/.bin/babel babelrc/index.js --presets=env,stage-2 --no-babelrc

```

```
//新增transform-runtime,可以看到按需加载了所需要的代码
./node_modules/.bin/babel babelrc/index.js --presets=env,stage-2 --plugins=transform-runtime --no-babelrc

```

```
//根据babelrc的配置来转换
cd babelrc
../node_modules/.bin/webpack
```

# babel的配置一般有3种方法

## .babelrc

官方推荐

```
{
  presets:[
    "stage-2",//包含transform-object-rest-spread等规则，
    [
      "env",{
        "targets": {
          "browsers": [
            "last 20 versions",
            "ie > 8"
          ],
          "node": "current"
        },
        "module": false,
        "useBuiltIns": true,//和babel-polyfill搭配,替换import 'babel-polyfill',按需引入
        "debug": true//开启调试模式
      }
    ]
  ],
  plugins: [
    /* "transform-runtime" 转换的插件*/
  ]
}
```


## 写到package.json


```
"babel": {
  "presets": [
    "env"
  ],
}
```

##  命令行传参数

```
babel index.js --presets=env
```

