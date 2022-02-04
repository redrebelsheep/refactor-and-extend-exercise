import CarValidList from "./CarValidList";

const Validation = ({ make, year }) => {
  if (isNaN(year) || year.length !== 4) {
    return false;
  }

  if (CarValidList.some((car) => car.make === make.toLowerCase())) {
    var elment = CarValidList.filter((car) => car.make === make.toLowerCase());

    if ((year >= elment[0].yearBeginnLong) &&( year <= elment[0].yearEndLong)) {
      return true;
    } else {
      return false;
    }
  }
};



export default Validation;
