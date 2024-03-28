

const expenses = {
    "2023-01": {
        "01": {
            "food": [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
            "fuel": [210.22]
        },
        "09": {
            "food": [11.9],
            "fuel": [190.22]
        }
    },
    "2023-03": {
        "07": {
            "food": [20, 11.9, 30.20, 11.9]
        },
        "04": {
            "food": [10.20, 11.50, 2.5],
            "fuel": []
        }
    },
    "2023-04": {}
}


const getNumberFirstSunday = (dateKey) => {

    let firstSunday = 0;
    let accDay = 1;
    do {
        firstSunday = new Date(`${dateKey}-0${accDay}`).getDay() === 0 ? accDay : 0;
        accDay++;
    }
    while (firstSunday === 0);

    return firstSunday;
};

const extractPayments = (exp) => {
    let chosenDaysArr = [];

    Object.keys(exp).forEach(dateKey => {
        let firstSundayDay = getNumberFirstSunday(dateKey);
        Object.keys(exp[dateKey]).forEach(dateDay => {

            firstSundayDay >= +dateDay && 
            Object.values(exp[dateKey][dateDay]).forEach(expArr => {
                chosenDaysArr = chosenDaysArr.concat(expArr);
            })
        })
    })
    return chosenDaysArr;
}

const showMediana = (array) => {

    if (array.length > 0){
        const modulo = array.length % 2;
        if (modulo === 0){
            const half = array.length / 2;
            return (array[half-1] + array[half]) / 2;
        } else {            
            return array[(array.length / 2)-0.5];
        }
    } else {
        return null;
    }
}


const get_median_of_first_week_expenses = (expenses) => {
    let result = null;

    let paymentArray = extractPayments(expenses);
    paymentArray.sort((a, b) => a - b);

    result = showMediana(paymentArray);
    return result;
}


console.log(get_median_of_first_week_expenses(expenses));