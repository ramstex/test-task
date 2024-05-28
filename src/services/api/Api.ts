const fetchCall = async (url: RequestInfo | URL, options?: RequestInit): Promise<Response | null> => {
  try {
    return await fetch(url, options);
  } catch (error) {
    console.error(error);
  }

  return null;
};

const Api = {
  json: async <T>(url: RequestInfo | URL, options?: RequestInit): Promise<T | null> => {
    const response = await fetchCall(url, options);

    try {
      return await response?.json();
    } catch (error) {
      console.error(error);
    }

    return null;
  },

  response: async (url: RequestInfo | URL, options?: RequestInit): Promise<Response | null> => {
    return await fetchCall(url, options);
  },
};

export default Api;
