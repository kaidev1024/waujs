import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

function twConcat(...classNames: string[]) {
  return classNames.filter((item) => item.trim() !== '').join(' ');
}

// twcn overwrites the previous classNames
function twcn(...inputs: string[]) {
  const filteredInput = inputs.filter((item) => item && item.trim() !== '');
  // const filteredInput = inputs.filter((input: string) => { return input.trim() !== ''; });
  if (filteredInput.length === 0) return '';
  if (filteredInput.length === 1) return filteredInput[0];
  return twMerge(clsx(filteredInput));
}

export { twConcat, twcn };
