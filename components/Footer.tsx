import Link from "next/link";
import { ChatBubbleLeftRightIcon, MapPinIcon, CakeIcon } from "@heroicons/react/24/outline";
import { clinic } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-plum-900 text-plum-100">
      <div className="container-responsive grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="text-xl font-extrabold tracking-tight text-white">
            {clinic.name}
          </p>
          <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed">
            From-scratch custom cakes — made with love near downtown
            Houston, Texas, in memory of my grandmother, Dear.
          </p>
          <p className="mt-4 flex items-center gap-2 text-[0.95rem] font-semibold text-white">
            <CakeIcon className="h-5 w-5 text-honey" aria-hidden="true" />
            From-scratch custom cakes · {clinic.area}
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">
            Pickup
          </p>
          <p className="mt-3 flex items-start gap-2 text-[0.95rem] leading-relaxed">
            <MapPinIcon className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
            Centrally located near downtown Houston — delivered safely with the CakeSafe delivery system.
          </p>
          <p className="mt-3 flex items-center gap-2 text-[0.95rem]">
            <ChatBubbleLeftRightIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
            <a
              href={clinic.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-white underline-offset-2 hover:underline"
            >
              {clinic.facebookText}
            </a>
          </p>
          <p className="mt-3 text-[0.95rem]">
            No phone number or email listed — Facebook DM is the way to order.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-white">
            Order
          </p>
          <p className="mt-3 text-[0.95rem] leading-relaxed">
            Everything is baked and decorated to order. DM us with what you
            want, when you need it, and how many people it is for — we confirm
            the price and delivery time before anything is baked.
          </p>
          <Link
            href="#book"
            className="mt-5 inline-flex min-h-11 items-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-plum-900 transition-colors hover:bg-plum-50"
          >
            Request an order
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-responsive flex flex-col gap-2 py-5 text-sm text-plum-200 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 {clinic.name} · Houston, TX
          </p>
          <p>
            Preview website built from public information — details can be
            corrected on request. Photography: Unsplash.
          </p>
        </div>
      </div>
    </footer>
  );
}
