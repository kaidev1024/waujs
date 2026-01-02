/* eslint-disable no-unused-vars */
export const readBlob = (blob: Blob, callback: (result: string) => void) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = () => {
    callback(reader.result?.toString() || '');
  };
};

function readBlobAsync(blob: Blob) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = function () {
      return resolve(fileReader.result);
    };
    fileReader.readAsDataURL(blob);
  });
}

export const getBlobByS3Url = async (s3Url: string) => {
  const file = await fetch(s3Url);
  return file.blob();
};

export const getDataUrlByS3Url = async (s3Url: string) => {
  const blob = await getBlobByS3Url(s3Url);
  const result = await readBlobAsync(blob);
  return result?.toString() || '';
};

export const convertS3UrlToDataUrl = async (s3Url: string): Promise<string> => {
  const res = await fetch(s3Url);
  if (!res.ok) {
    throw new Error(`Failed to fetch image: ${res.status}`);
  }

  const blob = await res.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}