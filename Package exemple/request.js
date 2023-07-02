const axios  = require("axios");

axios.get('https://www.google.com').then((response) => { // then is the callback to execute when the Promise is resolved
    console.log(response);
}).catch(err => console.log(err)).then(() => console.log("All done")); // catch is the callback to execute when the Promise is not resolved/rejected




