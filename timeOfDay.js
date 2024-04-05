const currTimeOfDay = new Date().getHours()

const isMorning = time => {
    if(time >= 4 && time < 12) return true
    else return false
}

const isAfternoon = time => {
    if(time >= 12 && time < 17) return true
    else return false
}

const isEvening = time => {
    if(time >= 17 || time < 4) return true
    else return false
}

const getTimeOfDay = time => {
    if(isMorning(time)) return 'Morning'
    else if(isAfternoon(time)) return 'Afternoon'
    else return 'Evening'
}

module.exports = { isMorning, isAfternoon, isEvening, getTimeOfDay}
