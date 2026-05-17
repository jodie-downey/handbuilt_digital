declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    pintrk?: (...args: unknown[]) => void;
  }
}

export function trackPurchaseClick(productName: string) {
  window.fbq?.('track', 'InitiateCheckout', { content_name: productName });
  window.pintrk?.('track', 'checkout', { product_name: productName });
}

export function trackLead() {
  window.fbq?.('track', 'Lead');
  window.pintrk?.('track', 'lead');
}
