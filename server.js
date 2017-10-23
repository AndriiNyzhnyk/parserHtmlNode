let needle = require('needle');
let fs = require('fs');

const URL = 'http://...'; // need URl

needle.get(URL, (err, res) => {
    if (err) throw err;

    fs.writeFile("index.html", res.body, (error) => {
        if(error) throw error;
        console.log("recording is complete");
        // let data = fs.readFileSync("hello.txt", "utf8");
        // console.log(data);
    });
});


