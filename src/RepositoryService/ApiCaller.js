const HttpCaller = async (route, Method, body, headers) => {
  try {
    const savedUserResponse = await fetch(
      `https://melody-ai.up.railway.app/${route}`,
      {
        method: `${Method}`,
        body: body,
        headers: headers,
      }
    );

    if (!savedUserResponse.ok) {
      const errorData = await savedUserResponse.text();
      throw new Error(errorData);
    }

    const responseData = await savedUserResponse.text(); // Change this line to use .text()
    return responseData;
  } catch (err) {
    return err;
  }
};

export default HttpCaller;
