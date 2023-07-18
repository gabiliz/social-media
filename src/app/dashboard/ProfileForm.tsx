'use client';

export function ProfileForm({ user }: any) {

  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    };

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    await res.json();
  };

  return (
    <div>
      <h2 className="text-center text-2xl mb-10" >Edit Your Profile</h2>
      <form className="flex flex-col" onSubmit={updateUser}>
        <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="name">Name</label>
        <input className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" name="name" defaultValue={user?.name ?? ''} />
        <label className="mt-8 block text-sm font-medium leading-6 text-gray-900" htmlFor="bio">Bio</label>
        <textarea
          name="bio"
          cols={70}
          rows={5}
          defaultValue={user?.bio ?? ''}
          className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        ></textarea>
        <label className="mt-8 block text-sm font-medium leading-6 text-gray-900" htmlFor="age">Age</label>
        <input className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" name="age" defaultValue={user?.age ?? 0} />
        <label className="mt-8 block text-sm font-medium leading-6 text-gray-900" htmlFor="image">Profile Image URL</label>
        <input className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" name="image" defaultValue={user?.image ?? ''} />

        <button className="mt-10 rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600" type="submit">Save</button>
      </form>
    </div>
  );
}