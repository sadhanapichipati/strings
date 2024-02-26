// ==== String Problem #2 ====
// Given an IP address - "111.139.161.143". Split it into its component parts 111, 139, 161, 143 and return it in an array in numeric values. [111, 139, 161, 143].

// Support IPV4 addresses only. If there are other characters detected, return an empty array.

function addresses(ipAddress){
    const parts = ipAddress.split(",");
    if(parts.length !== 4){
        return [];
    }
    const numericValues = parts.map((part)=> parseInt(part,10));
    if(numericValues.some(isNaN)) {
        return [];
    }
    return numericValues;
}

// module.exports = addresses;

const storeddata = addresses["111.139.161.143"];
console.log(storeddata);
