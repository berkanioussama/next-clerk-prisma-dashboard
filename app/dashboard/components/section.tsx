const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full flex flex-col mb-8">
      {children}
    </section>
  );
}
 
export default Section;