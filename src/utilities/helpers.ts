class AppHelper {
    static appendParamsToUrl(url: string, params: any) {
        const queryParams = [];
    
        for (const key in params) {
          if (params.hasOwnProperty(key) && params[key]) {
            queryParams.push(
              `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
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

export default AppHelper