export const getPictures = async () => {
  const rawResponse = await fetch(`${import.meta.env.VITE_API_URL}/pictures`);
  return await rawResponse.json();
}

export const getFeaturedPictures = async () => {
  const rawResponse = await fetch(`${import.meta.env.VITE_API_URL}/pictures?_sort=rating&_order=asc`);
  return await rawResponse.json();
}

export const getNewestPictures = async () => {
  const rawResponse = await fetch(`${import.meta.env.VITE_API_URL}/pictures?_sort=createdAt&_order=desc`);
  return await rawResponse.json();
}

export const getEditorChoicePictures = async () => {
  const rawResponse = await fetch(`${import.meta.env.VITE_API_URL}/pictures?editorChoice=true&_sort=createdAt&_order=desc`);
  return await rawResponse.json();
}

export const getPictureById = async (id: string) => {
  const rawResponse = await fetch(`${import.meta.env.VITE_API_URL}/pictures/${id}`);
  return await rawResponse.json();
}

export const addPicture = async (payload: any) => {
  const rawResponse = await fetch(
    `${import.meta.env.VITE_API_URL}/pictures`,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    }
  );
  return await rawResponse.json();
}