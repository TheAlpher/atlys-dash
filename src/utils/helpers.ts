  export const dateDiffString = (dateNum : number): string => {
    const diffMinutes = (Date.now() - dateNum) / 60000;

    let dateStr: string = "";
    if (diffMinutes > 1440) dateStr = Math.ceil(diffMinutes / 1440) + " days";
    else if (diffMinutes > 60) dateStr = Math.ceil(diffMinutes / 60) + " hours";
    else dateStr = Math.ceil(diffMinutes) + " mins";

    return dateStr;
  };