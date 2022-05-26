/*jshint esversion: 6 */
let a = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let pattern = /love/gi;
console.log(a.match(pattern).length);

let b= 'You cannot end a sentence with because because because is a conjunction';
let pt= /because/gi;
let becauseCount = b.match(pt).length;
console.log(becauseCount);

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const Hash = /#/g;
const At   = /@/g;
const And  = /&/g; 
const ExcMark = /!/g; 
const QuestMark = /\?/g;
const Dollar = /\$/g;
const Percent = /\%/g;

const cleanedQuote = sentence.replace(Hash, "").replace(At, "").replace(And, "").replace(QuestMark, "").replace(ExcMark, "").replace(Dollar, "").replace(Percent, "");
console.log(cleanedQuote);

const words = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

const digitPattern = /\d+/g;
let digitWords = words.match(digitPattern);

let inc1 = parseInt(digitWords[0]);
let inc2 = parseInt(digitWords[1]);
let inc3 = parseInt(digitWords[2]);

let totalIncome = inc1 + inc2 + inc3;
console.log(`Total Income: ${totalIncome}`);
