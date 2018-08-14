function getAllBooks(): any {
  const books: any[] = [
    {
      author: "Evan Burchard",
      available: true,
      title: "Refactoring JavaScript",
    },
    {
      author: "Liang Yuxian Eugene",
      available: false,
      title: "JavaScript Testing",
    },
    {
      author: "Lea Verou",
      available: true,
      title: "CSS Secrets",
    },
    {
      author: "Andrea Chialerri",
      available: true,
      title: "Mastering JavaScript Object-Oriented Programming",
    },
  ];
  return books;
}

document.getElementById("typescript-app").innerText = JSON.stringify(
  getAllBooks(),
);
