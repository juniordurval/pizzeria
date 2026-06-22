import { CartItem } from '@/types';

/**
 * Generates a formatted WhatsApp message for the order.
 * 
 * @param items - The list of items in the cart.
 * @param notes - Additional notes from the customer.
 * @param userName - The name of the customer.
 * @returns A complete WhatsApp URL with the encoded message.
 */
export function generateWhatsAppMessage(
  items: CartItem[],
  notes: string,
  userName: string
): string {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  
  if (!phoneNumber) {
    console.error('NEXT_PUBLIC_WHATSAPP_NUMBER is not defined');
    return '';
  }

  let message = `*New Order from ${userName}*

`;
  
  items.forEach((item, index) => {
    const sizeInfo = item.size ? ` (${item.size})` : '';
    message += `${index + 1}. *${item.name}${sizeInfo}* x${item.quantity} - $${item.totalPrice.toFixed(2)}
`;
  });

  message += `
*Total: $${items.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2)}*
`;

  if (notes) {
    message += `
*Notes:* ${notes}
`;
  }

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
