const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence.charAt(i));
  }, 50 * i);
}

setTimeout(() => {
  console.log('\n');
}, 50 * sentence.length);