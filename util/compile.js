const sass = require('sass');
const { minify } = require('csso');

function compile() {
    try {
        const result = sass.compile("theme/main.scss");
        return minify(result.css.toString()).css;
    } catch {
        return "";
    }
}

exports.compile = compile;