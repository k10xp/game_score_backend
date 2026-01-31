exports.handler = async function (event, _context) {
  if (event.httpMethod === "POST") {
    const newMatch = JSON.parse(event.body);

    if (!newMatch || typeof newMatch !== "object") {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid JSON payload" }),
      };
    }

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Match received",
        data: newMatch,
      }),
    };
  }

  return {
    statusCode: 405, // Method Not Allowed
    body: JSON.stringify({ error: "Only POST method is allowed" }),
  };
};
