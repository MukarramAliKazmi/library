function Book(title, author, numberOfPages, isRead, imageURL) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id            = crypto.randomUUID();
  this.title         = title;
  this.author        = author;
  this.numberOfPages = numberOfPages;
  this.isRead        = isRead;
  this.imageURL      = imageURL;
}

Book.prototype.toggleIsRead = function() {
  this.isRead = !this.isRead;
}

function Library() {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.books = [];
}

Library.prototype.addBook = function(book) {
  if (!(book instanceof Book)) {
    throw Error("Book must be an instance of Book constructor");
  }
  this.books.push(book);
}

Library.prototype.findBook = function(id) {
  return this.books.find(book => book.id === id);
}

Library.prototype.findBookIndex = function(id) {
  return this.books.findIndex(book => book.id === id);
}

Library.prototype.removeBook = function(id) {
  const index = this.findBookIndex(id);
  if (index !== -1) {
    this.books.splice(index, 1);
  }
}

const myLibrary = new Library();

const bookCard = {
  cardImage: function(book) {
    return `
      <div class="card-image">
        <img src=${book.imageURL} alt="${book.title}'s cover image" class="image" />
      </div>
    `;
  },
  cardBody: function(book) {
    return `
      <h3 class="card-heading">${book.title}</h3>
      <p class="card-subheading">By ${book.author}</p>
      <span class="num-pages">
        <svg viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="num-pages-icon">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99667 0.0421236C9.2134 0.0827434 9.4041 0.202674 9.52683 0.375538C9.64956 0.548401 9.69427 0.760039 9.65111 0.963902L8.51778 6.29705H13.4844L14.6833 0.656643C14.7015 0.552833 14.7417 0.453522 14.8015 0.364628C14.8613 0.275734 14.9395 0.199075 15.0315 0.139221C15.1235 0.0793672 15.2273 0.0375422 15.3369 0.0162387C15.4464 -0.00506478 15.5594 -0.00541081 15.6691 0.0152213C15.7787 0.0358535 15.8829 0.0770415 15.9753 0.136331C16.0677 0.19562 16.1464 0.271798 16.2069 0.360324C16.2673 0.44885 16.3082 0.547913 16.327 0.651609C16.3459 0.755305 16.3424 0.861512 16.3167 0.963902L15.1833 6.29705H19.1667C19.3877 6.29705 19.5996 6.37963 19.7559 6.52663C19.9122 6.67362 20 6.87299 20 7.08087C20 7.28876 19.9122 7.48813 19.7559 7.63512C19.5996 7.78212 19.3877 7.8647 19.1667 7.8647H14.85L13.5167 14.1353H17.5C17.721 14.1353 17.933 14.2179 18.0893 14.3649C18.2455 14.5119 18.3333 14.7112 18.3333 14.9191C18.3333 15.127 18.2455 15.3264 18.0893 15.4734C17.933 15.6204 17.721 15.703 17.5 15.703H13.1833L11.9833 21.3434C11.9652 21.4472 11.925 21.5465 11.8652 21.6354C11.8054 21.7243 11.7271 21.8009 11.6352 21.8608C11.5432 21.9206 11.4393 21.9625 11.3298 21.9838C11.2203 22.0051 11.1073 22.0054 10.9976 21.9848C10.8879 21.9641 10.7838 21.923 10.6914 21.8637C10.599 21.8044 10.5202 21.7282 10.4598 21.6397C10.3994 21.5512 10.3585 21.4521 10.3397 21.3484C10.3208 21.2447 10.3243 21.1385 10.35 21.0361L11.4833 15.703H6.51667L5.31667 21.3434C5.29852 21.4472 5.25834 21.5465 5.19852 21.6354C5.1387 21.7243 5.06047 21.8009 4.96849 21.8608C4.87651 21.9206 4.77266 21.9625 4.66312 21.9838C4.55359 22.0051 4.44062 22.0054 4.33095 21.9848C4.22127 21.9641 4.11713 21.923 4.02474 21.8637C3.93234 21.8044 3.85358 21.7282 3.79315 21.6397C3.73272 21.5512 3.69185 21.4521 3.67298 21.3484C3.65412 21.2447 3.65764 21.1385 3.68333 21.0361L4.81667 15.703H0.833333C0.61232 15.703 0.400358 15.6204 0.244078 15.4734C0.0877973 15.3264 0 15.127 0 14.9191C0 14.7112 0.0877973 14.5119 0.244078 14.3649C0.400358 14.2179 0.61232 14.1353 0.833333 14.1353H5.15L6.48333 7.8647H2.5C2.27899 7.8647 2.06702 7.78212 1.91074 7.63512C1.75446 7.48813 1.66667 7.28876 1.66667 7.08087C1.66667 6.87299 1.75446 6.67362 1.91074 6.52663C2.06702 6.37963 2.27899 6.29705 2.5 6.29705H6.81667L8.01667 0.656643C8.06011 0.452978 8.18772 0.27386 8.37147 0.158636C8.55522 0.0434126 8.78009 0.00150645 8.99667 0.0421236ZM8.18333 7.8647L6.85 14.1353H11.8167L13.15 7.8647H8.18333Z" fill="currentColor"/>
        </svg>
        ${book.numberOfPages.toLocaleString()} pages
      </span>
    `;
  },
  cardActions: function(book) {
    return `
      <div class="card-actions" data-card-actions="${book.id}">
        <button onclick="events.toggleBookIsRead('${book.id}')" class="toggle-read-button">
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="book-read-icon-fill" ${!book.isRead && "style='display: none'"}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.603 1.799C7.02496 1.31223 7.54673 0.921956 8.13287 0.654682C8.71901 0.387407 9.3558 0.24939 10 0.250002C11.357 0.250002 12.573 0.850002 13.397 1.799C14.0397 1.75311 14.6847 1.84609 15.2883 2.07161C15.8919 2.29713 16.4399 2.64992 16.895 3.106C17.3509 3.56106 17.7036 4.10888 17.9291 4.71226C18.1546 5.31564 18.2477 5.96047 18.202 6.603C18.6886 7.02505 19.0787 7.54686 19.3458 8.133C19.6129 8.71913 19.7507 9.35588 19.75 10C19.7506 10.6442 19.6126 11.281 19.3453 11.8671C19.078 12.4533 18.6878 12.975 18.201 13.397C18.2467 14.0395 18.1536 14.6844 17.9281 15.2877C17.7026 15.8911 17.3499 16.4389 16.894 16.894C16.4389 17.3499 15.8911 17.7026 15.2877 17.9281C14.6844 18.1536 14.0395 18.2467 13.397 18.201C12.975 18.6878 12.4533 19.078 11.8671 19.3453C11.281 19.6126 10.6442 19.7506 10 19.75C9.3558 19.7506 8.71901 19.6126 8.13287 19.3453C7.54673 19.078 7.02496 18.6878 6.603 18.201C5.96038 18.247 5.31538 18.1542 4.71181 17.9289C4.10824 17.7035 3.56023 17.3509 3.105 16.895C2.64897 16.4398 2.29622 15.8919 2.0707 15.2883C1.84518 14.6847 1.75218 14.0397 1.798 13.397C1.31141 12.9749 0.921328 12.4531 0.654228 11.867C0.387128 11.2809 0.249266 10.6441 0.250003 10C0.250003 8.643 0.850003 7.427 1.799 6.603C1.75326 5.96047 1.8463 5.31562 2.07182 4.71222C2.29734 4.10883 2.65005 3.56103 3.106 3.106C3.56103 2.65005 4.10883 2.29734 4.71222 2.07182C5.31562 1.8463 5.96047 1.75326 6.603 1.799ZM13.61 8.186C13.67 8.10605 13.7134 8.01492 13.7377 7.91795C13.762 7.82098 13.7666 7.72014 13.7514 7.62136C13.7361 7.52257 13.7013 7.42783 13.6489 7.3427C13.5965 7.25757 13.5276 7.18378 13.4463 7.12565C13.3649 7.06753 13.2728 7.02624 13.1753 7.00423C13.0778 6.98222 12.9769 6.97992 12.8785 6.99746C12.7801 7.01501 12.6862 7.05205 12.6023 7.10641C12.5184 7.16077 12.4462 7.23135 12.39 7.314L9.154 11.844L7.53 10.22C7.38783 10.0875 7.19978 10.0154 7.00548 10.0188C6.81118 10.0223 6.62579 10.101 6.48838 10.2384C6.35097 10.3758 6.27226 10.5612 6.26883 10.7555C6.2654 10.9498 6.33752 11.1378 6.47 11.28L8.72 13.53C8.79699 13.6069 8.8898 13.6662 8.99199 13.7036C9.09418 13.7411 9.2033 13.7559 9.31177 13.7469C9.42024 13.738 9.52546 13.7055 9.62013 13.6519C9.7148 13.5982 9.79665 13.5245 9.86 13.436L13.61 8.186Z" />
          </svg>
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="book-read-icon" ${book.isRead && "style='display: none'"}>
            <path d="M7 10.75L9.25 13L13 7.75M19 10C19 11.268 18.37 12.39 17.407 13.068C17.5108 13.6608 17.4701 14.2698 17.2886 14.8436C17.107 15.4173 16.7899 15.9388 16.364 16.364C15.9388 16.7899 15.4173 17.107 14.8436 17.2886C14.2698 17.4701 13.6608 17.5108 13.068 17.407C12.7222 17.8995 12.2629 18.3014 11.7288 18.5787C11.1948 18.856 10.6017 19.0005 10 19C8.732 19 7.61 18.37 6.932 17.407C6.33923 17.5107 5.73021 17.47 5.15649 17.2885C4.58276 17.1069 4.06122 16.7898 3.636 16.364C3.21013 15.9388 2.89298 15.4173 2.71142 14.8436C2.52987 14.2698 2.48925 13.6608 2.593 13.068C2.10052 12.7222 1.69862 12.2629 1.42133 11.7288C1.14403 11.1948 0.999511 10.6017 1 10C1 8.732 1.63 7.61 2.593 6.932C2.48925 6.33923 2.52987 5.73019 2.71142 5.15645C2.89298 4.58271 3.21013 4.06117 3.636 3.636C4.06122 3.21019 4.58276 2.8931 5.15649 2.71154C5.73021 2.52999 6.33923 2.48933 6.932 2.593C7.27785 2.10058 7.73722 1.69873 8.27126 1.42144C8.80529 1.14415 9.39827 0.999595 10 1C11.268 1 12.39 1.63 13.068 2.593C13.6608 2.48933 14.2698 2.52999 14.8435 2.71154C15.4172 2.8931 15.9388 3.21019 16.364 3.636C16.7898 4.06122 17.1069 4.58276 17.2885 5.15649C17.47 5.73021 17.5107 6.33923 17.407 6.932C17.8995 7.27779 18.3014 7.73715 18.5787 8.2712C18.856 8.80525 19.0005 9.39825 19 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button onclick="events.removeBook('${book.id}')" class="remove-button">
          <svg viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="delete-icon">
            <path d="M11.74 8.00003L11.394 17M6.606 17L6.26 8.00003M16.228 4.79003C16.57 4.84203 16.91 4.89703 17.25 4.95603M16.228 4.79003L15.16 18.673C15.1164 19.2383 14.8611 19.7662 14.445 20.1513C14.029 20.5364 13.4829 20.7502 12.916 20.75H5.084C4.5171 20.7502 3.97102 20.5364 3.55498 20.1513C3.13894 19.7662 2.88359 19.2383 2.84 18.673L1.772 4.79003M16.228 4.79003C15.0739 4.61555 13.9138 4.48313 12.75 4.39303M1.772 4.79003C1.43 4.84103 1.09 4.89603 0.75 4.95503M1.772 4.79003C2.92613 4.61555 4.08623 4.48313 5.25 4.39303M12.75 4.39303V3.47703C12.75 2.29703 11.84 1.31303 10.66 1.27603C9.55362 1.24067 8.44638 1.24067 7.34 1.27603C6.16 1.31303 5.25 2.29803 5.25 3.47703V4.39303M12.75 4.39303C10.2537 4.20011 7.74628 4.20011 5.25 4.39303" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    `;
  },
  card: function(book) {
    return `
      <div class="card" data-id="${book.id}">
        ${this.cardImage(book)}
        ${this.cardBody(book)}
        ${this.cardActions(book)}
      </div>
    `;
  }
};

const dom = {
  bookForm:                 document.getElementById("book-form"),
  bookDialog:               document.querySelector('dialog'),
  library:                  document.getElementById("library"),
  getBookCard:    bookId => document.querySelector(`[data-id="${bookId}"]`),
  getCardActions: bookId => document.querySelector(`[data-card-actions="${bookId}"]`)
};

const utils = {
  closeDialog:  () => dom.bookDialog.close(),
  openDialog:   () => dom.bookDialog.showModal(),
  loadDemoData: () => (
    fetch('./books.json')
    .then(response => response.json())
    .then((data) => {
      data.reverse().forEach(b => {
        const book = new Book(
          b.title,
          b.author,
          b.numberOfPages,
          b.isRead,
          b.imageURL
        );
        const libraryElement = dom.library;
        const newBookCard = bookCard.card(book);
        myLibrary.addBook(book);
        libraryElement.innerHTML = newBookCard + libraryElement.innerHTML;
      });
    })
  )
};

const events = {
  toggleBookIsRead: id => {
    const book = myLibrary.findBook(id);
    book.toggleIsRead();
    const bookElement = dom.getCardActions(id);
    const updatedActions = bookCard.cardActions(book);
    bookElement.innerHTML = updatedActions;
  },
  removeBook: id => {
    const book = myLibrary.findBook(id);
    const bookElement = dom.getBookCard(id);
    myLibrary.removeBook(id);
    bookElement.remove();
  },
  addBook: event => {
    event.preventDefault();
    const {
      title,
      author,
      numberOfPages,
      isRead,
      imageURL
    } = event.target;
    const book = new Book(
      title.value,
      author.value,
      numberOfPages.value,
      isRead.checked,
      imageURL.value
    );
    const libraryElement = dom.library;
    const newBookCard = bookCard.card(book);
    myLibrary.addBook(book);
    libraryElement.innerHTML = newBookCard + libraryElement.innerHTML;
    utils.closeDialog();
  }
};

function main() {
  dom.bookForm.addEventListener("submit", events.addBook);
  utils.loadDemoData();
}

main();

