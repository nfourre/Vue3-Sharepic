interface AuthorInterface {
  id: number;
  firstname: string;
  lastname: string;
}

export const getAuthorById = async (authorId: number): Promise<AuthorInterface> => {
  const rawResponse = await fetch(`${import.meta.env.VITE_API_URL}/authors/${authorId}`);
  return await rawResponse.json();
}