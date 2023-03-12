
const passwordStrength = {
    upper : new RegExp('^(?=.*[A-Z])'),
    lower : new RegExp('^(?=.*[a-z])'),
    number : new RegExp('^(?=.*\\d)'),
    character : new RegExp('^(?=.*[.!@#$%^&*])'),
    minlength : new RegExp('^.{8,}'),  
}


export default passwordStrength;