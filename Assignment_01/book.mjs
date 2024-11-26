const Books = [
    { 
        id: 10, 
        title: "The Theory of Everything", 
        author: "Stephen Hawking", 
        rating: 4.6, 
        genre: "Science" 
    },
    { 
        id: 11, 
        title: "The Hobbit", 
        author: "J.R.R. Tolkien", 
        rating: 4.7, 
        genre: "Fiction" 
    },
    { 
        id: 12, 
        title: "The Lord of the Rings", 
        author: "J.R.R. Tolkien", 
        rating: 4.9, 
        genre: "Fiction" 
    },
    { 
        id: 13, 
        title: "Wuthering Heights", 
        author: "Emily Brontë", 
        rating: 4.6, 
        genre: "Romance" 
    },
    { 
        id: 14, 
        title: "Dune", 
        author: "Frank Herbert", 
        rating: 4.8, 
        genre: "Science" 
    },
    { 
        id: 15, 
        title: "The Hunger Games", 
        author: "Suzanne Collins", 
        rating: 4.5, 
        genre: "Fiction" 
    },
    { 
        id: 16, 
        title: "The Notebook", 
        author: "Nicholas Sparks", 
        rating: 4.4, 
        genre: "Romance" 
    }
  ];
  
  const printHighRatedBooks = () => {
    const highRatedTitles = Books.filter(book => book.rating > 4.5).map(book => book.title);
    console.log(`Books with rating higher than 4.5:${highRatedTitles}`);
    
  };

  const printBookDetails = () => {
    Books.forEach(({ title, author, rating, genre }) => {
      console.log(`Title: ${title}, Author: ${author}, Rating: ${rating}, Genre: ${genre}`);
    });
  };

  const printFictionBooks = () => {
    const fictionTitles = Books.filter(book => book.genre.toLowerCase() === "fiction").map(book => book.title);
    console.log(`Fiction Books: ${fictionTitles}`);
  };
  
  const getBookAuthors = () => {
    const authors = Books.map(book => book.author);
    console.log(`Authors ${authors}`);
    
  };
  
  export default Books;
  