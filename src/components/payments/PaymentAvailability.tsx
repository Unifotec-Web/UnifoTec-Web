import { getPaymentAvailability } from "@/lib/integrations/payments";

// Prepared for a future approved invoice-payment flow; this component is not mounted on public routes.
export default function PaymentAvailability({ enabled = false }: { enabled?: boolean }) {
  const availability = getPaymentAvailability();
  if (!enabled || availability.status === "unconfigured") return <p role="status">Online payment is not currently available</p>;
  return <p role="status">Hosted checkout can be offered after an invoice is confirmed.</p>;
}
