import "./showcase.css";
import { useFormData } from "./App";

export default function CardShowCase() {

  const { formData } = useFormData();

  const { 
    fullName,
    aboutMe,
    githubURL, 
    twitterURL, 
    favouriteBooks, 
    HTML, 
    CSS, 
    JS, 
    Git, 
    React, 
    Node 
  } = formData;
  
  const booksArray = favouriteBooks.split(',');
  const booksList =  booksArray.map((book) => {
    const split = book.split(' - ');
    return <li><b>{split[0]}</b>&nbsp;- {split[1]}</li>;
  });

  return (
    <div className="pageBody">
      <main class="has-dflex-center">
        <section>
          <div class="lx-container-85">
            <div class="lx-row align-stretch">
              <div class="lx-column is-3">
                <div class="lx-row">
                  <div class="lx-card">
                    <div class="lx-row">
                      <div class="has-dflex-center bs-md pic">
                        <img
                          src="https://github.com/luxonauta.png"
                          alt={ fullName }
                        />
                      </div>
                      <div class="infos">
                        <span>
                          <i class="fas fa-user-circle"></i>&nbsp;&nbsp;{ fullName }
                        </span>
                        <span>
                          <i class="fas fa-briefcase"></i>&nbsp;&nbsp;Full Stack
                          Developer
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="lx-card">
                    <div class="lx-row">
                      <h1 class="title">Connect with { fullName }</h1>
                      <div class="mini-cards">
                        <a
                          class="has-dflex-center bs-md"
                          href={ githubURL }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fab fa-github-alt"></i>
                        </a>
                        <a
                          class="has-dflex-center bs-md"
                          href={ twitterURL }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lx-column">
                <div class="lx-row">
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-info-circle"></i>&nbsp;Welcome to { fullName }'s
                       corner of the Internet
                    </h1>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-hand-point-right"></i>&nbsp;About me
                    </h1>
                    <div class="text">
                      <p>
                        { aboutMe }
                      </p>
                    </div>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-terminal"></i>&nbsp;Technologies
                    </h1>
                    <div class="mini-cards">
                      { 
                        CSS && (
                          <span class="has-dflex-center bs-md" title="CSS">
                            <i class="fab fa-css3-alt"></i>
                          </span>
                      )}
                      {
                        HTML && (
                          <span class="has-dflex-center bs-md" title="HTML">
                            <i class="fab fa-html5"></i>
                          </span>
                      )}
                      {
                        JS && (
                          <span class="has-dflex-center bs-md" title="JS">
                            <i class="fab fa-js"></i>
                          </span>
                      )}
                      {
                        Git && (
                          <span class="has-dflex-center bs-md" title="Git">
                            <i class="fab fa-git-alt"></i>
                          </span>
                      )}
                      {
                        React && (
                          <span class="has-dflex-center bs-md" title="React">
                            <i class="fab fa-react"></i>
                          </span>
                      )}
                      { 
                        Node && (
                          <span class="has-dflex-center bs-md" title="Node JS">
                            <i class="fab fa-node-js"></i>
                          </span>  
                      )}
                    </div>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-book"></i>&nbsp;My favorite books
                    </h1>
                    <div class="text">
                      <ol>
                          { booksList }
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}