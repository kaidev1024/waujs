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
