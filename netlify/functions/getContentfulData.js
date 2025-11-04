import { createClient } from "contentful"

export const handler = async (event, context) => {
  const client = createClient({
    space: process.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
    environment: process.env.VITE_CONTENTFUL_ENVIRONMENT || "master",
  })

  // Optional query param for filtering
  const params = event.queryStringParameters || {}
  const type = params.type || "product" // default to 'product'
  const sort = params.sort || "sys.updatedAt" // 👈 default newest first

  try {
    const entries = await client.getEntries({
      content_type: type,
      order: sort,
    })
    return {
      statusCode: 200,
      body: JSON.stringify(entries.items),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error fetching Contentful data", error }),
    }
  }
}
