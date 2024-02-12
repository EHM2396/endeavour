export default function InformationLayaout( { children }:{
 children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
        { children }
    </main>
  );
}