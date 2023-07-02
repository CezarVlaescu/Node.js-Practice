const { parse }  = require('csv-parse');
const fs = require('fs');

const habitablePlanets = [];

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 11 && planet['koi_prad'] < 1.6;
} // the function to return habitable planets

fs.createReadStream('kepler_data.csv') // reading data from kepler
.pipe(parse({ // connecting 2 streams togheter (readable to writable)
    comment : '#', // we want the lines that starts with this caracters
    columns : true, // return each row as js object
})) // kepler is our source, parse is destination using pipe for processing : CSV -> Piped (get data and processing) -> Parse -> Series of throws (Node streams) | (readable.pipe(writable))
.on('data', data => {
    if(isHabitablePlanet(data)){
        habitablePlanets.push(data)}
}) // return data as buffers object (bits)
.on('error', err => console.log(err))
.on('end', () => {
    console.log(habitablePlanets.map((planet) => {
        return planet['kepler_name'];
    }))
    console.log(`${habitablePlanets.length} habitable planets found!`) // getting the results after conversion 
    console.log('All done')}
)