const webpack = require('webpack');

module.exports = {
    // 시작지점 지정
    entry: './src/main.js',
    
    // 파일출력 설정
    output: {
        // 대상폴더명
        path: `${__dirname}/build`,
        // 출력파일명
        filename: 'bundle.js'
    },

    //소스 맵 사용위해 선언
    devtool: 'source-map',

    plugins: [
        // JS파일 minify실행
        new webpack.optimize.UglifyJsPlugin( {
            // minify할때도 소스맵 이용    
            sourceMap: true
       })
    ]

};