export const getPictureComments = async (pictureId: number): Promise<CommentInterface[]> => {
  const rawResponse = await fetch(`${import.meta.env.VITE_API_URL}/comments?imageId=${pictureId}`);
  return await rawResponse.json();
}

export const addPictureComment = async (payload: any) => {
  const rawResponse = await fetch(
    `${import.meta.env.VITE_API_URL}/comments/`,
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

interface AuthorInterface {
  id: number;
  firstname: string;
  lastname: string;
}

interface CommentInterface {
  id: number;
  text: string;
  authorId: number;
  imageId: number;
  createdAt: number;
  author?: AuthorInterface;
}