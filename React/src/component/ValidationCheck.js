

const ValidationCheck = ({ make, year }, validListDB) => {
  if (isNaN(year) || year.length !== 4) {
    return false;
  }

  if (validListDB.some((car) => car.make === make.toLowerCase())) {
    var elment = validListDB.filter((car) => car.make === make.toLowerCase());

    if ((year >= elment[0].yearBeginnLong) &&( year <= elment[0].yearEndLong)) {
      return true;
    } else {
      return false;
    }
  }
};



export default ValidationCheck;
