// https://github.com/sindresorhus/grunt-sass
module.exports = {
	options: {
		sourceMap: true,
		outputStyle: 'expanded'
	},
	style: {
		src: '<%= paths.authorAssets %>scss/style.scss',
		dest: '<%= paths.tmp %>style.css'
	},
	editorStyle: {
		src: '<%= paths.authorAssets %>scss/editor-style.scss',
		dest: '<%= paths.tmp %>editor-style.css'
	}
};
