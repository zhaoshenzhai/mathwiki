var fs = require('fs');
var fm = require('front-matter');

const path = '/home/zhao/Dropbox/MathWiki/.site/'

extractAll(function(data) {
    fs.appendFile(path + "static/allFiles.json", JSON.stringify(data), () => {});
});

function extractAll(callback) {
    var frontMatterList = [];
    fs.readdir(path + "content/", function(err, files) {
        if (err) { throw err; }
        for (let i = 0; i < files.length; i++) {
            extract(path + "content/" + files[i], function(data) {
                data['relPath'] = files[i].substr(0, files[i].length - 3);
                frontMatterList.push(data);
                if (i == files.length - 1) { callback(frontMatterList); }
            });
        }
    });
}

function extract(filePath, callback) {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) { throw err; }
        callback(fm(data).attributes);
    });
}
