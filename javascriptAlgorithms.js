// 1. How would you verify a prime number?
function isPrime(n)
{
    var divisor = 3,
        limit = Math.sqrt(n);

    //check simple cases
    if (n == 2 || n == 3)
        return true;
    if (n % 2 == 0)
        return false;

    while (divisor <= limit)
    {
        if (n % divisor == 0)
            return false;
        else
            divisor += 2;
    }
    return true;
};
console.log(isPrime(137));
console.log(isPrime(237));



//2. How could you find all prime factors of a number?

function primeFactors(n){
    var factors = [],
        divisor = 2;

    while(n>2){
        if(n % divisor == 0){
            factors.push(divisor);
            n= n/ divisor;
        }
        else{
            divisor++;
        }
    }
    return factors;
};
console.log(primeFactors(69));



//3.  How do get nth Fibonacci number?

function fibonacci(n){
    var fibo = [0, 1];

    if (n <= 2) return 1;

    for (var i = 2; i <=n; i++ ){
        fibo[i] = fibo[i-1]+fibo[i-2];
    }

    return fibo[n];
};
console.log(fibonacci(12));


//3.b) method 2

function fibonacci(n){
    if(n<=1)
        return n;
    else
        return fibonacci(n-1) + fibonacci (n-2);
};
console.log(fibonacci(12));


//4. How would you remove duplicate members from an array?

function removeDuplicate(arr){
    var exists ={},
        outArr = [],
        elm;

    for(var i =0; i<arr.length; i++){
        elm = arr[i];
        if(!exists[elm]){
            outArr.push(elm);
            exists[elm] = true;
        }
    }
    return outArr;
};
console.log(removeDuplicate([1,3,3,3,1,5,6,7,8,1]));


//5. How would you swap two numbers without using a temporary variable?

function swapNumb(a, b){
    console.log('before swap: ','a: ', a, 'b: ', b);
    b = b -a;
    a = a+ b;
    b = a-b;
    console.log('after swap: ','a: ', a, 'b: ', b);
};
swapNumb(2, 3);


//6. How would you reverse a string in JavaScript?


function reverse(str){
    var rtnStr = '';
    for(var i = str.length-1; i>=0;i--){
        rtnStr +=str[i];
    }
    return rtnStr;
};
console.log(reverse('you are a nice dude'));


//7. How would you reverse words in a sentence?
function reverseWords(str){
    var rev = [],
        wordLen = 0;
    for(var i = str.length-1; i>=0; i--){
        if(str[i]==' ' || i==0){
            rev.push(str.substr(i,wordLen+1));
            wordLen = 0;
        }
        else
            wordLen++;
    }
    return rev.join(' ');
}
console.log(reverseWords("praveen kumar"));

function reverseWord(str){
    return str.split(' ').reverse();
}
console.log(reverseWord("praveen kumar"));

//8. How will you verify a word as palindrome?

function isPalindrome(str){
    var i, len = str.length;
    for(i =0; i<len/2; i++){
        if (str[i]!== str[len -1 -i])
            return false;
    }
    return true;
}
console.log(isPalindrome('madam'));

console.log(isPalindrome('toyota'));

//9. from a unsorted array of numbers 1 to 100 excluding one number, how will you find that number?

function missingNumber(arr){
    var n = arr.length+1,
        sum = 0,
        expectedSum = n* (n+1)/2;

    for(var i = 0, len = arr.length; i < len; i++){
        sum += arr[i];
    }

    return expectedSum - sum;
}
console.log(missingNumber([5, 2, 6, 1, 3]));

//10. How would you create all permutation of a string?

function permutations(str){
    var arr = str.split(''),
        len = arr.length,
        perms = [],
        rest,
        picked,
        restPerms,
        next;

    if (len == 0)
        return [str];

    for (var i=0; i<len; i++)
    {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);

        restPerms = permutations(rest.join(''));

        for (var j=0, jLen = restPerms.length; j< jLen; j++)
        {
            next = picked.concat(restPerms[j]);
            perms.push(next.join(''));
        }
    }
    return perms;
}
console.log(permutations("praveen kumar"));



