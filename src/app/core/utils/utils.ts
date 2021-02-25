import { formatDate } from "@angular/common";

// date format via one format
export function dateFormat(date: string){
  if(date){
    return formatDate(date, "dd/mm/yy", "en-US");
  }
  return "";
}
// date format via multiple format by user
export function dateFormatByUser(date: string, format: string){
  if(date){
    return formatDate(date, format, "en-US");
  }
  return "";
}
