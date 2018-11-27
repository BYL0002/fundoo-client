let email, pass1, pass2, arr = [], logarr = [];
function set(value) {
    arr.push(value);
    console.log('arr in set : ', arr);
}

function set1 () {
    console.log('arr : ', arr);
    logarr.push({
        email : arr[0],
        pass : arr[1]
    })
    console.log('logarr : ', logarr);
    
}

function go () {

}

module.exports = {set, set1};