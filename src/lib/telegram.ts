// src/lib/telegram.ts

interface CartItem {
  title: string
  price: number
  quantity: number
}

const BOT_TOKEN = "AAGH1nOo4VQqP44nFUNiQJYS4apX4-_kbiQ"
const CHAT_ID = "8254677711"

export const sendToTelegram = async (items: CartItem[]) => {
  if (!items.length) return

  const message = items
    .map(
      (item, index) =>
        `${index + 1}. ${item.title}\n   ${item.quantity} x $${item.price} = $${item.price * item.quantity}`
    )
    .join("\n\n")

  const text = `🧾 *Yangi zakaz!*\n\n${message}`

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: "Markdown",
    }),
  })
}
