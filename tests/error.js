export const mockAxiosError = (status, statusText = '', data) => {
  return {
    isAxiosError: true,
    name: '',
    message: '',
    toJSON: () => ({}),
    config: {},
    response: {
      data: {
        errors: data || [],
      },
      status: status,
      statusText: statusText,
      headers: {},
      config: {},
    },
  };
};
