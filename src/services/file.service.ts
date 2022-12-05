export const uploadFile = async (payload: any) => {
  const formData = new FormData();
  formData.append('name', payload.name);
  formData.append('file', payload.file);
  const rawResponse = await fetch(
    `${import.meta.env.VITE_FILE_SERVER_URL}/upload`,
    {
      mode: 'no-cors',
      method: 'POST',
      body: formData,
    }
  );
  return await rawResponse.json();
}