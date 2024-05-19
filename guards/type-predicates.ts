export type FinalInvoice = {
  __typename: 'FinalInvoice';
};

export type DraftInvoice = {
  __typename: 'DraftInvoice';
};

export type Invoice = FinalInvoice | DraftInvoice;

export const isFinalInvoice = (invoice: Invoice): invoice is FinalInvoice => {
  return invoice.__typename === 'FinalInvoice';
};
export const isDraftInvoice = (invoice: Invoice): invoice is Invoice => {
  return invoice.__typename === 'DraftInvoice';
};

const isDraft = isDraftInvoice({ __typename: 'DraftInvoice' });

console.log(isDraft);
