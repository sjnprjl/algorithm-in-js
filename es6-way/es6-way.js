const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const person = { name: 'Costas', address: { street: 'Lalaland 12' } };

const printCompany = (key) => {
  companies.forEach((company) => console.log(company[key]));
};

const minMax = (arr) => {
  let min = +Infinity;
  let max = -Infinity;
  arr.forEach(
    (value) => ((min = Math.min(min, value)), (max = Math.max(max, value)))
  );
  return [min, max];
};

const sumOfPositiveNumber = (array) => {
  return array.reduce((p, c) => (c > 0 ? p + c : p), 0);
};

const factorial = (num) => {
  if (!Number.isInteger(num)) throw new Error('argument must be number.');
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

// printCompany('name');

const printCompanyNameStartAfter = (date) =>
  companies.forEach((company) =>
    company.start > date ? console.log(company) : null
  );

// printCompanyNameStartAfter(1987);

const sortCompanyBasedOn = (key, asc = true) => {
  companies.sort((a, b) => (asc ? a[key] - b[key] : b[key] - a[key]));
  return companies;
};
// console.log(sortCompanyBasedOn('end'));

const sortAges = (asc = true) => {
  ages.sort((a, b) => (asc ? a - b : b - a));
  return ages;
};
// console.log(sortAges(false));

const sumOf = (...array) => {
  return array.reduce((p, c) => p + c, 0);
};
// console.log(sumOf(...ages));

const newCompany = ({ name, category }) => {
  return {
    name,
    category,
    print: function () {
      console.log(this.name);
    },
  };
};

const makeArrayOf = (...elements) => {
  return elements;
};

const { street } = person;

const increment = (step = 1, start = 0) => {
  let increment = start;
  return () => (increment += step);
};

// assuming string only contains alphabet not numbers and symbol.
const isStringUppercase = (string) => {
  for (const char of string) {
    if (!(char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91)) return false;
  }
  return true;
};

const isUndefinedOrNull = (value) => {
  return value == undefined;
};

const isValidJson = (json) => {
  try {
    return !!JSON.parse(json);
  } catch (err) {
    return false;
  }
};

//foo=bar&bar=baz&bar=bazz
const queryToObject = (query) => {
  const obj = {};
  const keyValueArray = query.split('&').map((keyValue) => keyValue.split('='));
  keyValueArray.forEach(([k, v]) => {
    return obj[k]
      ? Array.isArray(obj[k])
        ? obj[k].push(v)
        : (obj[k] = [obj[k], v])
      : (obj[k] = v);
  });
  return obj;
};
// console.log(queryToObject('foo=bar&bar=baz&bar=bazz&foo=1&foo=2&zzz=aaa'));

// console.log('is valid json: ', isValidJson('{"abc": "def", }'));

const mean = (...values) => {
  return sumOf(...values) / values.length;
};
const median = (...values) => {
  if (values.length % 2 === 1) return values[Math.trunc(values.length / 2)];
  return (values[values.length / 2] + values[values.length / 2 - 1]) / 2;
};
// console.log('median', median(1, 3, 3, 6, 7, 8, 9));
// console.log('median', median(1, 2, 3, 4, 5, 6, 8, 9));
// console.log('median', median(1, 2, 3));
//
// const incrementByOne = increment();
// console.log(incrementByOne()); // 1
// incrementByOne();
// incrementByOne();
// incrementByOne();
// let data = incrementByOne(); // 5
// console.log(data);
//
// console.log(sumOfPositiveNumber([-1, -2, -3, 4, 5, -10, 1])); //10
// console.log(mean(1, 2, 3));
