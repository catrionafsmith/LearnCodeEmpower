exports.handler = async function() {
    try {
      const subject = process.env.API_KEY
      return { statusCode: 200, body: JSON.stringify({ message: `${subject}` }) }
    } catch (err) {
      return { statusCode: 500, body: err.toString() }
    }
  }
  