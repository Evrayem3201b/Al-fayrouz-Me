const SANITY_PROJECT_ID = "se2nqpcg";
const SANITY_DATASET = "production";
const SANITY_TOKEN =
  "sk0u41COAxtJr02F07ezMUqEtotCjWs9nYfx1uxs5uxmjBdj0IJgKRGHX0zk9ytvAAkPeTwRdLsPegQ8WxweDSgE5QlRID5B9c1ifYlnUTwQqX92C1tg5OCDC4XlfrSKHWnbcNNVUpBE8b8Ou7NuEmGbxSQjLaxlQKHhxCkrNP6kkQdZy1NZ";
const SANITY_API_VERSION = "2025-07-15";

// Replace this with your actual array of objects
const docs = 
// Generate a create mutation for each object
const mutations = docs.map((doc) => ({
  create: doc,
}));

fetch(
  `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/mutate/${SANITY_DATASET}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SANITY_TOKEN}`,
    },
    body: JSON.stringify({ mutations }),
  }
)
  .then((res) => res.json())
  .then((data) => {
    console.log("Success:", JSON.stringify(data, null, 2));
  })
  .catch((err) => {
    console.error("Error:", err);
  });
