const populateEdit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const aboutInput = e.currentTarget.elements.namedItem(
    "about"
  ) as HTMLInputElement;
  const about = aboutInput.value;

  return about;
};

export default populateEdit;
