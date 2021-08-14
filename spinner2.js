//process.stdout.write("hello from spinner1.js... \rheyyy\n");
let time = 0;
const lines = ["|", "/", "-", "\\", "|", "/", "-", "\\"];

for (let line of lines) {
  setTimeout(() => {
    process.stdout.write(`\r ${line}`);
  }, (time += 200)); // ever .2 sec it will animate
}
setTimeout(() => {
  process.stdout.write("\n");
}, time);

// ----------------------------------
// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 100);

// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write("\r\\   ");
// }, 700);

// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 900);

// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 1200);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 1500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write("\r\\   ");
// }, 1800);

// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 2100);

// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 2400);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 2700);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write("\r\\   ");
// }, 3000);

// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 3300);

// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 3600);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 3900);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write("\r\\   ");
// }, 4200);
