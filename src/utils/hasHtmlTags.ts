export const hasHtmlTags = (str: string): boolean => {
  return typeof str === 'string' && /<[^>]*>/g.test(str);
};