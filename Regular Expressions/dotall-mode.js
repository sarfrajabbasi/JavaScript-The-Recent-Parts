var msg = `
The quick brown fox
jumps over the
lazy dog`;

msg.match(/ beown.*over/);
// it is able to match any character,except it doesn't match across new lines.
// dot* can'tspan across a newline.
// null

msg.match(/brown.*over/s);
// turn on the dot all mode,the dot is able to match all characters.including new line.
// ["brown fox \njumps over"]