export default async function handler(req, res) {
  const jokeRequest = await fetch("https://icanhazdadjoke.com", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const jokeResponse = await jokeRequest.json();

  res.status(200).json({ data: jokeResponse });
}
