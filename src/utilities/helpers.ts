export function formatDateTime(dateTimeString: string): string {
  // Create a Date object from the ISO string
  const date = new Date(dateTimeString);
  // Define an array of weekday names
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // Get the weekday name from the date
  const weekday = weekdays[date.getDay()];
  // Get the hours and format them for 12-hour clock
  let hours = date.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  // Format minutes to always be two digits
  const minutes = date.getMinutes().toString().padStart(2, "0");
  // Format the final string
  return `${weekday}, ${hours}:${minutes} ${ampm}`;
}

class AppHelper {
  static appendParamsToUrl(url: string, params: any) {
    const queryParams = [];

    for (const key in params) {
      if (params.hasOwnProperty(key) && params[key]) {
        queryParams.push(
          `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`,
        );
      }
    }
    if (queryParams.length > 0) {
      const queryString = queryParams.join("&");
      return url.includes("?")
        ? `${url}&${queryString}`
        : `${url}?${queryString}`;
    }
    return url;
  }
}

export default AppHelper;
