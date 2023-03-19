type ReplaceAllInput = {
  str: string;
  find: string;
  replace: string;
  caseSensitive?: boolean;
};

export { ReplaceAllInput };

const replaceAll = ({
  caseSensitive,
  find,
  replace,
  str,
}: ReplaceAllInput): string =>
  str.replace(new RegExp(find, caseSensitive ? "ig" : "g"), replace);

export { replaceAll };
