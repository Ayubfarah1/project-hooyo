// pages/api/create-checkout-session.js
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).end('Method Not Allowed')
  }

  const { amount, recurring } = req.body
  const unitAmount = Math.round(amount * 100) // dollars → cents

  // Build price_data
  let priceData = {
    currency: 'usd',
    unit_amount: unitAmount,
    product_data: {
      name: recurring
        ? `Monthly donation of $${amount}`
        : `One-time donation of $${amount}`,
    },
  }

  // If recurring, add the recurring interval
  let mode = 'payment'
  if (recurring) {
    priceData.recurring = { interval: 'month' }
    mode = 'subscription'
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode,
      line_items: [{ price_data: priceData, quantity: 1 }],
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/donate`,
    })

    res.status(200).json({ url: session.url })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Stripe session creation failed.' })
  }
}
