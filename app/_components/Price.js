import { getCabinPrice } from "@/app/_lib/data-service";

async function Price({ cabinId }) {
  const { regularPrice, discount } = await getCabinPrice(cabinId);

  return (
    <p className="flex items-baseline gap-3 mt-12 text-3xl">
      {discount > 0 ? (
        <>
          <span className="text-3xl font-[350]">
            ${regularPrice - discount}
          </span>
          <span className="font-semibold line-through text-primary-600">
            ${regularPrice}
          </span>
        </>
      ) : (
        <span className="text-3xl font-[350]">${regularPrice}</span>
      )}
      <span className="text-primary-200">/ night</span>
    </p>
  );
}

export default Price;
