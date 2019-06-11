export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties,
    };
};

export const checkValidity = (value, rules) => {
    let isValid = false;

    if(!rules) {
        return true;
    }

    if(rules.required) {
        isValid = value.trim() !== '';
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    /*if(rules.isPhone) {
        const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        isValid = pattern.test(value) && isValid
    }*/

    if(rules.isPhone) {
        const pattern = /^(\d+-?)+\d+$/;
        isValid = pattern.test(value) && isValid
    }

    if(rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }
    if(rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
};