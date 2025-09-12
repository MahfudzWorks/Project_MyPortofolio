import ProjectCard from "../components/ProjectCard";
import AnimatedBavkgroundV2 from "../components/AnimatedBavkgroundV2";

function Projects() {
  return (
    <section
      id="projects"
      className="relative flex flex-col justify-center items-center scroll-mt-10 "
    >
      <AnimatedBavkgroundV2 />
      <h1 className="text-3xl font-bold text-black mt-16">
        <span className="inline-block animate-bounce">💻</span> Projects{" "}
        <span className="inline-block animate-pulse">🚧</span>
      </h1>
      <ProjectCard>
        <div className="flex w-200 mt-4 p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] shadow-[-5px_10px_15px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col bg-white p-6 shadow-lg">
            <h2 className="font-semibold">
              Project Sistem E-Commerce BestCell
            </h2>
            <br />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              est qui minima vel illum magnam officiis molestiae sapiente veniam
              error rem quibusdam dolorum tenetur repellat rerum distinctio
              velit accusantium architecto.
            </p>
            <br />
            <div className="flex w-12 gap-4">
              <img src="/src/assets/icon/Laravel.svg" alt="laravel" />
              <img src="/src/assets/icon/PHP.svg" alt="php" />
              <img src="/src/assets/icon/CSS3.svg" alt="css" />
              <img src="/src/assets/icon/JavaScript.svg" alt="js" />
              <img src="/src/assets/icon/MySQL.svg" alt="sql" />
            </div>
          </div>
          <div className="bg-white">
            <img
              src="/src/assets/P-BestCell.svg"
              alt="P-BestCell"
              className="my-10 shadow-[-5px_10px_15px_rgba(0,0,0,0.2)]"
            />
          </div>
        </div>
      </ProjectCard>
      <br />
      <ProjectCard>
        <div className="flex w-200 mt-4 p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] shadow-[-5px_10px_15px_rgba(0,0,0,0.2)]">
          <div className="bg-white z-10">
            <img
              src="/src/assets/P-PNRB.svg"
              alt="P-PNRB"
              className="my-10 shadow-[5px_10px_15px_rgba(0,0,0,0.2)]"
            />
          </div>
          <div className="flex flex-col bg-white p-6 shadow-lg text-right">
            <h2 className="font-semibold">Project Landing Page PNRB</h2>
            <br />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              est qui minima vel illum magnam officiis molestiae sapiente veniam
              error rem quibusdam dolorum tenetur repellat rerum distinctio
              velit accusantium architecto.
            </p>
            <br />
            <div className="flex gap-4 justify-end">
              <img
                src="/src/assets/icon/Html5.svg"
                alt="laravel"
                className="w-12"
              />
              <img src="/src/assets/icon/CSS3.svg" alt="css" className="w-12" />
              <img
                src="/src/assets/icon/JavaScript.svg"
                alt="js"
                className="w-12"
              />
            </div>
          </div>
        </div>
      </ProjectCard>
      <br />
      <ProjectCard>
        <div className="flex w-200 mt-4 p-[2px] bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] shadow-[-5px_10px_15px_rgba(0,0,0,0.2)]">
          <div className="flex flex-col bg-white p-6 shadow-lg">
            <h2 className="font-semibold">Project Landing Page Gym24</h2>
            <br />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              est qui minima vel illum magnam officiis molestiae sapiente veniam
              error rem quibusdam dolorum tenetur repellat rerum distinctio
              velit accusantium architecto.
            </p>
            <br />
            <div className="flex w-12 gap-4">
              <img src="/src/assets/icon/Html5.svg" alt="laravel" />
              <img src="/src/assets/icon/CSS3.svg" alt="css" />
              <img src="/src/assets/icon/JavaScript.svg" alt="js" />
            </div>
          </div>
          <div className="bg-white">
            <img
              src="/src/assets/P-Gym.svg"
              alt="P-BestCell"
              className="my-10 shadow-[-5px_10px_15px_rgba(0,0,0,0.2)]"
            />
          </div>
        </div>
      </ProjectCard>
      <div className="h-32" />
    </section>
  );
}

export default Projects;
