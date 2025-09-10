function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center scroll-mt-26"
    >
      <h1 className="text-3xl font-bold text-black mt-4">
        <span className="inline-block">👨‍💻</span> About Me{" "}
        <span className="inline-block animate-spin">🌟</span>
      </h1>
      <div className="text-center w-200 mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          commodi qui consectetur cumque suscipit odit, fuga delectus.
          Cupiditate neque possimus saepe. Quidem eaque modi aperiam cum
          explicabo earum perspiciatis reiciendis.
        </p>
      </div>
      <div className="h-32" />
    </section>
  );
}

export default About;
