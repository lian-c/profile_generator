const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are cool too :P ', (name) => {
  rl.question('What\'s an activity you like doing? ', (hobby) => {
    rl.question('What do you like to listen to while doing that? ', (music) => {
      rl.question('What is your fav animal ', (animal) => {
        rl.question('What\'s your favourite food? ', (food) => {
          rl.question('Which is one place you want to visit? ', (place) => {
            rl.question('What is your superpower? In a few words tell us what u good at! ', (superpower) => {


              console.log(`This is ${name}. Their favourite hobby is ${hobby}. They really enjoy listening to ${music}.\n
      If they could, they would have ${animal} as their pet. They really enjoy eating ${food}, can't stop won't stop. \n
      It would be a dream for them to go to ${place}. WOW THEY ARE AMAZINIG AT ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

