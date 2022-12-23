 
 export const getDays = (added) => {
    const now = new Date();
    const add = new Date(added);
    const diffTime = Math.abs(now - add);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    let seconds = Math.floor(diffTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    let res;
    if(seconds < 60){
        res = seconds + " seconds ago";
    }else if(seconds > 60 && minutes < 60){
        res = minutes + " minutes ago";
    }else if(minutes > 60 && hours < 24){
        res = hours +  (hours === 1  ? " hour ago" : " hours ago");
    }else if(hours > 24){
        res =  diffDays + (diffDays === 1 ? " day ago" :  " days ago");
    }
    return res;
}