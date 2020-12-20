const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks');

const bookSeed = {
    authors: [Neil Gaiman, Terry Pratchett],
    description: 'There is a distinct hint of Armageddon in the air. According to The Nice and Accurate Prophecies of Agnes Nutter, Witch (recorded, thankfully, in 1655, before she blew up her entire village and all its inhabitants, who had gathered to watch her burn), the world will end on a Saturday. Next Saturday, in fact. So the armies of Good and Evil are amassing, the Four Bikers of the Apocalypse are revving up their mighty hogs and hitting the road, and the world s last two remaining witch-finders are getting ready to fight the good fight, armed with awkwardly antiquated instructions and stick pins. Atlantis is rising, frogs are falling, tempers are flaring. . . . Right. Everything appears to be going according to Divine Plan. Except that a somewhat fussy angel and a fast-living demon -- each of whom has lived among Earth's mortals for many millennia and has grown rather fond of the lifestyle -- are not particularly looking forward to the coming Rapture. If Crowley and Aziraphale are going to stop it from happening, they've got to find and kill the Antichrist (which is a shame, as he is a really nice kid). There is just one glitch: someone seems to have misplaced him. First published in 1990, Neil Gaiman and Terry Pratchett s brilliantly dark and screamingly funny take on humankind s final judgment is back -- and just in time -- in a new hardcover edition (which includes an introduction by the authors, comments by each about the other, and answers to some still-burning questions about their wildly popular collaborative effort) that the devout and the damned alike will surely cherish until the end of all things.' 
    image: 'https://books.google.com/books/content?id=FsN0mxNThYIC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71y9Le3okQgXWfweEMv0JFwtwMsQKXGrdxDKH67b0AKX1BaQci5Ay_7DDGCx6OBAqIhLKfN4ELDDp_jnhvcfDgfjjnu4f_Is04kYjR2JbZSQ-LICiaGocN1kQ8-DnmtO6ZaiKwd'
    link: 'https://books.google.com/books?id=FsN0mxNThYIC&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false'
    title: 'Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch'
}

db.Book.remove({}).then(() => {
    db.Book.collection.insertMany(bookSeed)
}).then(data => {
        console.log(data.result.n + 'book(s) inserted!');
        process.exit(0);
}).catch(error => {
    console.log(error);
    process.exit(1);
});