const path = require('path');

module.exports = {
	
	entry: path.join(__dirname,'src', 'client', 'app', 'index.jsx'),
	
	output: {
	    path: path.join(__dirname, 'src', 'client','public'),
	    filename: 'bundle.js'
	},
	
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: path.join(__dirname, 'src', 'client', 'app'),
				use: "babel-loader"
			},
			{
				test: /\.(css)$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			},
			{
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                        limit: 8192
                        }
                    }  
                ]
            }
			
 		]
	},
 
	resolve: {
		modules: ['node_modules'],
		extensions: [".js", ".jsx"]
	},
		
	plugins: [],
	
	watch: true,
	
};

