import _ from "lodash";

const numbers = [1, 2, 3, 4, 5];

const max_number = _.max(numbers);
const min_number = _.min(numbers);

console.log("Maximum number:", max_number);
console.log("Minimum number:", min_number);