function addtokentoheader({headers}){
    
    const token = localStorage.getItem('token');
    if(token){
        headers.Authorization=`${token}`;
    }
    return headers;
}


const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return 'th'; // Covers 11th to 19th
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  function formatDate(date) {
    const day = date.getDate();
    const dayWithSuffix = day + getOrdinalSuffix(day);
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];
    return `${dayWithSuffix} ${monthNames[monthIndex]}, ${year}`;
  }
  function cardDate(dateString) {
    
    const [month, day, year] = dateString.split('/').map(Number);
    
    const date = new Date(year, month - 1, day);
  
    const dayWithSuffix = day + getOrdinalSuffix(day);
    const monthIndex = date.getMonth();
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];
    return `${monthNames[monthIndex]} ${dayWithSuffix}`;
  }
  function getFormattedDateTime() {
    const now = new Date();
    const date = formatDate(now);
    return {date};
  }
  function GetInitials(name){
    const trimmedname = name.trim().toUpperCase();
    const initials = trimmedname.slice(0,2);
  return initials;
}

export {addtokentoheader,GetInitials,getFormattedDateTime,cardDate};