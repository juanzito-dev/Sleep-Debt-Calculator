
const getSleepHours = (day) =>{
    if (day === 'Monday'){
      return 8;
    }else if (day === 'Tuesday'){
      return 7;
    }else if (day === 'Wednesday'){
      return 9;
    }else if (day === 'Thursday'){
      return 8;
    }else if (day === 'Friday'){
      return 4;
    }else if (day === 'Saturday'){
      return 3;
    }else if (day === 'Sunday'){
      return 9;
    }
  };

  const getActualSleepHours = () =>
  getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');  

  const getidealSleepHours = () => {
  const idealHours = 8;
    return idealHours * 7;
  }

  const calculateSleepDebt = () => {}
          const actualSleepHours = getActualSleepHours();
          const idealSleepHours = getidealSleepHours();

  const hoursless = idealSleepHours - actualSleepHours;
  const hoursmore = actualSleepHours - idealSleepHours;

  if(actualSleepHours === idealSleepHours){
    console.log("The user is sleeping the ideal hours.")
  }else if(actualSleepHours < idealSleepHours){
    console.log("The user is sleeping " + hoursless + " hours less.")
  }else if(actualSleepHours > idealSleepHours){
    console.log("The user is sleeping " + hoursmore + " hours more.")
  }
  

  