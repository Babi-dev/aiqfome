import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

type propsType = {
  title?: string;
  image?: string;
  price?: number;
  rating?: number;
};

const Card = ({ title, image, price, rating }: propsType) => {
  const iconDelivery = useMemo(() => {
    return price === 0 ? 'free_delivery' : 'delivery';
  }, [price]);

  const formattedPrice = useMemo(() => {
    if (price === undefined || price === null) return 'grátis';
    return price.toFixed(2).replace('.', ',');
  }, [price]);

  return (
    <Link href="/store/slug-matsuri" className="flex w-full bg-neutral-100 rounded-lg">
      <Image
        className="rounded-l-lg"
        src={`/images/${image}`}
        alt={`${title} image`}
        width={72}
        height={72}
      />

      <div className="flex flex-col justify-center ml-2">
       <span>{title}</span>

        <div className="flex items-center mt-1">
          <Image
            src={`/icons/${iconDelivery}.svg`}
            alt={`${title} ${formattedPrice}`}
            width={24}
            height={24}
          />
          <span className="text-teal-700 text-sm">{formattedPrice}</span>
          <Image
            src="/icons/star.svg"
            alt={`${title} ${rating}`}
            width={24}
            height={24}
          />
          <span className="text-neutral-500 text-sm">{rating}</span>
        </div>
      </div>      
    </Link>
  );
};

export { Card };
