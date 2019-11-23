export default function numberPrettyPrint(num, digits) {
    if (num === null || num === undefined) return '';
    
    return num.toFixed(digits)
        .replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}