function Projects() {
  return (
    <section className="products" id="projects">
      <h2>My Work</h2>
      <div className="product">
        <h3>Work scheduler</h3>
        <a href="https://holytonyyyy.github.io/work-schedule/" className="btn">
          <img
            src="https://user-images.githubusercontent.com/129125608/236363099-0ddeeb55-ca14-41f1-ba16-f29fef06fb51.png"
            alt="Product Image"
          />
        </a>
      </div>
      <div className="product">
        <h3>My Goals</h3>
        <p>Password Maker</p>
        <a href="https://holytonyyyy.github.io/password-maker/" className="btn">
          <img
            src="https://user-images.githubusercontent.com/129125608/263794801-d5695d6c-382e-47ea-975c-e3cd18050a47.png"
            alt="Product Image"
          />
        </a>
      </div>
      <div className="product">
        
        <h3>Tech Blog</h3>
        
        <a
          // href="https://user-images.githubusercontent.com/129125608/255674893-4e7b8d37-dd85-4c45-831b-13480eb7b284.png"
          href="https://tech-blog-14000-139bb60aaa8a.herokuapp.com/login"
          className="btn"
        >
          <img
          // src="https://tech-blog-14000-139bb60aaa8a.herokuapp.com/login"
          src="https://user-images.githubusercontent.com/129125608/255674893-4e7b8d37-dd85-4c45-831b-13480eb7b284.png"
          alt="Product Image"
        />
        </a>
      </div>
    </section>
  );
}

export default Projects;
