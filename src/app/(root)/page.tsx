import EditorPanel from './_components/editor/EditorPanel';
import Header from './_components/nav/Header';
import OutputPanel from './_components/editor/output/OutputPanel';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w=[1800px] mx-auto p-4">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EditorPanel />
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}
