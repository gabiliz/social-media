import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div className='border p-4 rounded-md'>
      <Image
        className="rounded-md w-48 h-48"
        src={image ?? '/mememan.webp'}
        alt={`${name}'s profile`}
      />
      <div className='ml-2'>
        <h3 className='mt-2 text-xl'>
          <Link className='flex items-center' href={`/users/${id}`}>{name}
            <ArrowTopRightOnSquareIcon className="h-3 w-3 ml-2 stroke-gray-400" />
          </Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}