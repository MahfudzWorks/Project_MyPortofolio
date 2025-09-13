import AnimatedBavkgroundV2 from "../components/AnimatedBavkgroundV2";
import ProjectCard from "../components/ProjectCard";

function Experience() {
  return (
    <section
      id="experience"
      className="relative flex flex-col justify-center items-center scroll-mt-20"
    >
      <AnimatedBavkgroundV2 />
      <h1 className="text-3xl font-bold text-black mt-4">
        <span className="inline-block animate-pulse">💼</span> Experience{" "}
        <span className="inline-block animate-bounce">📈</span>
      </h1>
      <div className="relative flex justify-center text-center mt-4 gap-8">
        <ProjectCard>
          <div className="w-120 p-[2px] rounded-lg bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC05,#34A853)]">
            <div className="text-left p-6 rounded-lg bg-white backdrop-blur-md shadow-lg">
              <h2 className="font-semibold">Software Developer</h2>
              <h3 className="font-semibold">
                CV. Fintechnology Consultant Indonesian
              </h3>
              <p className="text-gray-600">
                Bertanggung jawab dalam pengembangan sistem digital, termasuk
                pembuatan website ecommerce menggunakan framework Laravel, mulai
                dari proses frontend, backend, hingga testing.
              </p>
            </div>
          </div>
        </ProjectCard>
        <div
          className="rounded-full w-16 h-16 flex items-center justify-center shrink-0 
             bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] p-[2px]"
        >
          <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
            <img
              src="/src/assets/icon/folder.svg"
              alt="folder"
              className="w-8"
            />
          </div>
        </div>
        <ProjectCard>
          <div className="w-120 text-left">
            <h3 className="py-5">08/2024 - 12/2024</h3>
          </div>
        </ProjectCard>
      </div>
      <br />
      <div className="relative flex justify-center text-center mt-4 gap-8">
        <ProjectCard>
          <div className="w-120 text-right">
            <h3 className="py-5">08/2021 - 09/2025</h3>
          </div>
        </ProjectCard>
        <div
          className="rounded-full w-16 h-16 flex items-center justify-center shrink-0 
            bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] p-[2px]"
        >
          <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
            <img
              src="/src/assets/icon/folder.svg"
              alt="folder"
              className="w-8"
            />
          </div>
        </div>
        <ProjectCard>
          <div className="w-120 p-[2px] rounded-lg bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC05,#34A853)]">
            <div className="text-left p-6 rounded-lg bg-white backdrop-blur-md shadow-lg">
              <h2 className="font-semibold">
                Sekretaris dan Bendahara Organisasi
              </h2>
              <h3 className="font-semibold">Karang Taruna Balongmojo</h3>
              <p className="text-gray-600">
                Bertugas mencatat pemasukan dan pengeluaran keuangan organisasi,
                menyusun surat undangan, proposal sponsor, serta mengelola
                administrasi untuk mendukung kelancaran kegiatan Kartar. .
              </p>
            </div>
          </div>
        </ProjectCard>
      </div>
      <br />
      <div className="relative flex justify-center text-center mt-4 gap-8">
        <ProjectCard>
          <div className="w-120 p-[2px] rounded-lg bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC05,#34A853)]">
            <div className="text-left p-6 rounded-lg bg-white backdrop-blur-md shadow-lg">
              <h2 className="font-semibold">Owner</h2>
              <h3 className="font-semibold">Jasa Joki Tugas Vyyy</h3>
              <p className="text-gray-600">
                Mendirikan dan mengelola layanan jasa pembuatan tugas akademik
                dan non-akademik, meliputi penulisan makalah, pengolahan data
                Excel, desain presentasi PowerPoint, serta pembuatan website dan
                desain grafis. Fokus pada kualitas, ketepatan waktu, dan
                kepuasan klien.
              </p>
            </div>
          </div>
        </ProjectCard>
        <div
          className="rounded-full w-16 h-16 flex items-center justify-center shrink-0 
             bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] p-[2px]"
        >
          <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
            <img
              src="/src/assets/icon/folder.svg"
              alt="folder"
              className="w-8"
            />
          </div>
        </div>
        <ProjectCard>
          <div className="w-120 text-left">
            <h3 className="py-5">08/2024 - 12/2024</h3>
          </div>
        </ProjectCard>
      </div>
      <br />
      <div className="relative flex justify-center text-center mt-4 gap-8">
        <ProjectCard>
          <div className="w-120 text-right">
            <h3 className="py-5">01/2022 - 07/2025</h3>
          </div>
        </ProjectCard>
        <div
          className="rounded-full w-16 h-16 flex items-center justify-center shrink-0 
             bg-[linear-gradient(to_right,#3b82f6,#ef4444,#facc15,#22c55e)] p-[2px]"
        >
          <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
            <img
              src="/src/assets/icon/folder.svg"
              alt="folder"
              className="w-8"
            />
          </div>
        </div>
        <ProjectCard>
          <div className="w-120 p-[2px] rounded-lg bg-[linear-gradient(to_right,#4285F4,#EA4335,#FBBC05,#34A853)]">
            <div className="text-left p-6 rounded-lg bg-white backdrop-blur-md shadow-lg">
              <h2 className="font-semibold">Guru Ekstrakurikuler</h2>
              <h3 className="font-semibold">SMP Negeri 28 Gresik</h3>
              <p className="text-gray-600">
                Mengajar ekstrakurikuler pencak silat sebagai upaya pengembangan
                minat dan bakat siswa di bidang olahraga dan seni bela diri
                tradisional, serta berhasil membimbing siswa meraih prestasi.
              </p>
            </div>
          </div>
        </ProjectCard>
      </div>
      <div className="h-32" />
    </section>
  );
}

export default Experience;
