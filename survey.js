const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let ans = '';
rl.question(`What's your name? Nicknames are also acceptable :) \n`, (answer) => {
  ans += `ma nama ${answer}, `
  rl.question(`What's an activity you like doing? \n`, (answer) => {
    ans += `i like the ${answer} `
    rl.question(`What do you listen to while doing that? \n`, (answer) => {
      ans += `while i listen to the ${answer}. `
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) \n`, (answer) => {
        ans += `for my fav meal ${answer}, `
        rl.question(`What's your favourite thing to eat for that meal? \n`, (answer) => {
          ans += `i put the ${answer} in my mouths. `
          rl.question(`Which sport is your absolute favourite? \n`, (answer) => {
            ans += `im prety sick at ${answer}. `
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! \n`, (answer) => {
              ans += `i habe da ${answer}.`
              console.log(ans);
              rl.close();
            });
          });
        });
      });
    });
  });
});

