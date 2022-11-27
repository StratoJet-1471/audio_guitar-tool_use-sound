const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: "./src/index.jsx",  
    output: {
        filename: "bundle.js", 
        path: path.resolve(__dirname, "public")
    },
  
    plugins: [
        new CleanWebpackPlugin(), //Этот плагин очищает папку-цель перед копированием/трансляцией от результатов предыдущих сборок.
        new CopyWebpackPlugin({ //Этот плагин занимается копированием/трансляцией.
            patterns: [ 
                {
                    from: "src",
                    to: "", //Здесь нужно указать путь относительно заданной выше, в module.exports.output папки-цели (т.е., "public").
                    //Поскольку мы собираемся копировать прямо в саму public, а не в какую-то её подпапку, то указываем просто "".
                    globOptions: {
                        ignore: [
                                  "**/*.jsx", "**/*.js", "**/*.json", "**/css/**", "**/sound/**"  //Эти файлы и папки не будут копироваться.
                        ]
                    }
                }
            ]
        })
    ],
    
    module: {
        rules: [ //Правила трансляции.
            {
                test: /\.jsx$/, 
                exclude: /node_modules/,  
                use: {
                    loader: "babel-loader", 
                    options: {
                        presets: ["@babel/preset-react"]     
                        //Пресеты – наборы babel для компиляции различных диалектов JS. 
                        //Нам нужен только babel-preset-react, который занимается компиляцией jsx.
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(mp3|jpg)$/,
                exclude: /node_modules/,
                use: [ 'file-loader']
            }
        ]
    }
};
