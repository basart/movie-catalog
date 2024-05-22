import { Header } from "@/components/Header";
import { MovieGrid } from "@/components/MovieGrid";

function CoursesPage() {
  return (
    <>
      <Header />

      <main>
        <div className="container pt-8">
          <MovieGrid />
        </div>
      </main>
    </>
  );
}

export default CoursesPage;
